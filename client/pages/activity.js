import Image from 'next/image';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import ActivityCard from '@/components/activityPage/ActivityCard';
import { useState } from 'react';
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

  // POPUP
  const [activity, setActivity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle(activity) {
    setActivity(activity);
    setIsOpen(true, () => {
      console.log(isOpen);
    });
  }
  function handleClose() {
    setIsOpen(false, () => {
      console.log(isOpen);
    });
  }

  // SEARCH BAR
  const [search, setSearch] = useState('');

  return (
    <main>
      <Container>
        {/* Hero */}
        <div className='position-relative mb-3'>
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
            <h1
              style={{
                color: '#ffffff',
                fontWeight: '700',
                lineHeight: '1.5',
                textShadow: '3px 3px 3px rgba(0, 0, 0, 0.4)',
              }}
            >
              Do It Now
              <br />
              For a Better
              <br />
              FUTURE
            </h1>
          </div>
        </div>
        {/* Search bar  */}
        <div>
          <Row className='justify-content-center'>
            <Col lg={6} xs={12} className='text-center text-lg-start'>
              <h3 className='fw-bold'>Kegiatan Relawan</h3>
            </Col>
            <Col lg={4} xs={6}>
              <InputGroup
                className='mb-3'
                style={{ border: '2px solid #D6925C', borderRadius: '21px', overflow: 'hidden' }}
              >
                <Form.Control
                  aria-label='Example text with button addon'
                  aria-describedby='basic-addon1'
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ border: 'none', boxShadow: 'none' }}
                />
                <Button variant='outline-secondary' id='button-addon1' style={{ border: 'none' }}>
                  <img src='/activityPage/search-icon.svg' alt='search icon' />
                </Button>
              </InputGroup>
            </Col>
            <Col lg={2} className='d-flex mb-3 justify-content-center justify-content-lg-end'>
              <Form.Select
                aria-label='Default select example'
                style={{ border: '2px solid #D6925C', backgroundColor: '#FAEADE', width: '10rem' }}
              >
                <option disabled selected>
                  Kategori
                </option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </Form.Select>
            </Col>
          </Row>
        </div>
        {/* Activity List  */}
        <div>
          <Row style={{ gap: '1.5rem 0px', maxWidth: '1000px', margin: 'auto' }}>
            {currentItems.map((activity, index) => (
              <Col lg={4} key={index} className='d-flex'>
                <ActivityCard activity={activity} handleToggle={handleToggle} />
              </Col>
            ))}
          </Row>
          {/* Pagination  */}
          <ReactPaginate
            breakLabel='...'
            nextLabel={<img src='/activityPage/next-icon.svg' alt='prev button' />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<img src='/activityPage/prev-icon.svg' alt='prev button' />}
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
