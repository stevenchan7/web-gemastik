import { Container, Row, Col } from 'react-bootstrap';
import SignUpForm from '@/components/SignUpForm';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function SignUpPage() {
  return (
    <Container
      fluid
      className={`${inter.className} d-flex justify-content-center align-items-center`}
    >
      <Container className='mt-5 mb-5'>
        <Row>
          <Col xs={12} lg={6} className='mb-5 mb-lg-0'>
            <h1 style={{ fontWeight: '800', fontSize: '48px' }}>
              It's Our <span style={{ color: '#7AC241' }}>Responsibility</span> to Keep Earth Clean
              and Healthy
            </h1>
          </Col>
          <Col xs={12} lg={6}>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

SignUpPage.getLayout = (page) => page;
