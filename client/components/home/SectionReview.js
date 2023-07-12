import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

export default function Review({ reviews }) {
  return (
    <Container
      fluid
      className='d-flex justify-content-center align-items-center p-0 pt-5 pb-5'
      style={{ backgroundColor: '#faeade' }}
    >
      <Container>
        <Row className='justify-content-center text-center '>
          <Col xs={12}>
            <h2 style={{ fontWeight: '800' }}>Aktivitas Untuk Kamu</h2>
            <p style={{ fontWeight: '500' }}>
              Berikut beberapa saran kegiatan yang dapat kamu lakukan
            </p>
          </Col>
          {reviews.map((rev, index) => (
            <Col key={index} xs={12} lg={4}>
              <ReviewCard rev={rev} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
