import Image from 'next/image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ActivityCard from '@/components/activityPage/ActivityCard';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Popup from '@/components/activityPage/Popup';
import styles from '@/styles/Activity.module.css';

export default function ActivityPage({ activities }) {
  // PAGINATION
  const itemsPerPage = 6;
  const [itemOffSet, setItemOffset] = useState(0);
  const endOffset = itemOffSet + itemsPerPage;

  const currentItems = activities.slice(itemOffSet, endOffset);
  const pageCount = Math.ceil(activities.length / itemsPerPage);

  console.log(currentItems, pageCount);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % activities.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  //
  const [activity, setActivity] = useState(null);
  const [isOpen, setisOpen] = useState(false);
  function handleToggle(activity) {
    setActivity(activity);
    setisOpen(true, () => {
      console.log(isOpen);
    });
  }
  function handleClose() {
    setisOpen(false, () => {
      console.log(isOpen);
    });
  }

  return (
    <main>
      <Container>
        {/* Hero */}
        <div className='position-relative'>
          <div>
            <Image
              src='/activityPage/heroImage.png'
              width={1000}
              height={450}
              style={{ width: '100%', height: 'auto' }}
              alt='tanam pohon'
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h1>
              Do It Now
              <br />
              For a Better
              <br />
              FUTURE
            </h1>
          </div>
        </div>
        <div>
          <Row style={{ gap: '1.5rem 0px', maxWidth: '1000px', margin: 'auto' }}>
            {currentItems.map((activity, index) => (
              <Col lg={4} key={index}>
                <ActivityCard activity={activity} handleToggle={handleToggle} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
            className={styles.paginate}
          />
        </div>
        {isOpen ? <Popup activity={activity} handleClose={handleClose} /> : <div></div>}
      </Container>
    </main>
  );
}

export async function getStaticProps() {
  const { activities } = await import('@/data/activity/activity.json');

  return { props: { activities } };
}
