import { Form, Button } from 'react-bootstrap';
import styles from '@/styles/SignIn.module.css';

export default function LoginForm() {
  return (
    <div className={`${styles.formContainer} m-auto p-4 d-flex align-items-center`}>
      <Form>
        <div className='fw-bold mb-3'>
          <h1 className='fw-bold mb-4'>
            Ayo Menjadi <span style={{ color: '#7AC241' }}>Relawan</span>
          </h1>
          <p>
            Bergabung bersama kami sebagai relawan bumi. Masukkan identitas sesuai formulir di bawah
            dan jadilah bagian dari kami!
          </p>
        </div>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Email' size='lg' />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Kata Sandi' size='lg' />
        </Form.Group>
        <div className='d-grid'>
          <Button type='submit' size='lg'>
            Masuk
          </Button>
        </div>
      </Form>
    </div>
  );
}
