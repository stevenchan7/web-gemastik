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
        <Row className='justify-content-center text-center'>
          <Col xs={12}>
            <h2 style={{ fontWeight: '800' }}>Kata Relawan</h2>
            <p style={{ fontWeight: '500' }}>Kata-kata relawan tentang kami</p>
          </Col>
          {reviews.map((rev, index) => (
            <Col key={index} xs={12} lg={4} className='d-flex justify-content-center'>
              <ReviewCard rev={rev} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
