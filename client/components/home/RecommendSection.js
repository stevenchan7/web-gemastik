import { Container, Row, Col } from 'react-bootstrap';
import ActivityCardHome from './ActivityCardHome';
import Link from 'next/link';
import Image from 'next/image';

export default function ForYou({ activities }) {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center p-0 pt-5 pb-5'>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col xs={12}>
            <h2 style={{ fontWeight: '800' }}>Aktivitas Untuk Kamu</h2>
            <p style={{ fontWeight: '500' }}>
              Berikut beberapa saran kegiatan yang dapat kamu lakukan
            </p>
          </Col>
          {activities.map((activity, index) => (
            <Col key={index} xs={12} lg={4} className='d-flex mb-3 mb-lg-0'>
              <ActivityCardHome activity={activity} />
            </Col>
          ))}
          <Col className='mt-lg-3 text-center text-lg-end'>
            <Link
              href={'/activity'}
              style={{ textDecoration: 'none', fontWeight: '700', color: '#579E1F' }}
            >
              Aktivitas Lainnya{' '}
              <Image src='/home/next-icon.png' width={22} height={22} alt='next icon' />
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
