import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '@/components/LoginForm';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
  return (
    <Container
      fluid
      className={`${inter.className} d-flex justify-content-center align-items-center`}
    >
      <Container className='mt-5 mb-5'>
        <Row>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

LoginPage.getLayout = (page) => page;
