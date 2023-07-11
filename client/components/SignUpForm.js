import { Form, Button, Alert } from 'react-bootstrap';
import styles from '@/styles/SignUp.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [role, setRole] = useState();
  const [alert, setAlert] = useState(null);

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      // Log some data to test
      console.log(username, email, pass, role);
      const res = await axios.post('http://localhost:5000/app/register', {
        username: username,
        email: email,
        password: pass,
        role: role,
      });
      console.log(res);
      setAlert(alertSuccess());
      // setAlert(alertSuccess());
      // router.push('/login');
    } catch (err) {
      console.error('Sign up error', err);
    }
  };

  function handleAlertButton() {
    router.push('/login');
  }

  function alertSuccess() {
    return (
      <div className='fixed-top'>
        <Alert variant='success'>
          Kamu berhasil terdaftar! Klik Masuk untuk melanjutkan{' '}
          <Button size='sm' onClick={handleAlertButton} variant='success'>
            Masuk
          </Button>
        </Alert>
      </div>
    );
    // alert('Registered Successfully');
  }

  return (
    <>
      {alert}
      <div className={`${styles.formContainer} m-auto p-4 d-flex align-items-center`}>
        <Form onSubmit={handleFormSubmit}>
          <div className='fw-bold mb-3'>
            <h1 className='fw-bold mb-4'>
              Ayo Menjadi <span style={{ color: '#7AC241' }}>Relawan</span>
            </h1>
            <p>
              Bergabung bersama kami sebagai relawan bumi. Masukkan identitas sesuai formulir di
              bawah dan jadilah bagian dari kami!
            </p>
          </div>
          <Form.Group className='mb-3'>
            <Form.Control
              placeholder='Nama Kamu'
              size='lg'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='email'
              placeholder='Email'
              size='lg'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              placeholder='Kata Sandi'
              size='lg'
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-5' controlId='formBasicCheckbox'>
            <Form.Check
              type='radio'
              label='Relawan'
              name='rad-group'
              id='relawan'
              onClick={(e) => setRole()}
            />
            <Form.Check
              type='radio'
              label='Komunitas'
              name='rad-group'
              id='komunitas'
              value={222}
              onClick={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          <div className='d-grid'>
            <Button type='submit' size='lg'>
              Daftar Sekarang
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
