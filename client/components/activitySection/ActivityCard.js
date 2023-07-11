import { useState } from 'react';
import { Card, Image } from 'react-bootstrap';

const ReadMoreText = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  function handleToggle() {
    setIsReadMore(!isReadMore);
  }

  return (
    <>
      <Card.Text style={{ fontSize: '12px' }}>
        {isReadMore ? text.slice(0, 130) + '.....' : text}
      </Card.Text>
      <span onClick={handleToggle} className='fw-bold'>
        {isReadMore ? 'Show more' : 'Show less'}
      </span>
    </>
  );
};

export default function ActivityCard({ activity }) {
  return (
    <Card
      style={{
        backgroundColor: '#FFF6EC',
        border: '1px solid #D6925C',
        width: '300px',
        minHeight: '350px',
        borderRadius: '16px',
        margin: 'auto',
      }}
    >
      <div className='p-3 pb-0' style={{ height: '180px' }}>
        <Image
          src='/activity/beach-cleanup.png'
          alt='beach clean up'
          style={{ borderRadius: '16px', objectFit: 'cover' }}
          width='100%'
          height='100%'
        />
      </div>
      <Card.Body>
        <Card.Title style={{ fontSize: '18px', fontWeight: '800' }}>{activity.title}</Card.Title>
        <ReadMoreText>{activity.desc}</ReadMoreText>
      </Card.Body>
    </Card>
  );
}
