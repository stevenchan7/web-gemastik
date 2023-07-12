import Link from 'next/link';
import { Container, Button, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Layout.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={inter.className} style={{ backgroundColor: '#FFF6EC' }}>
      {/* Navbar */}
      <Navbar expand='md' className={styles.navbarContainer}>
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Navbar.Brand className='mt-3 mt-md-0 d-inline-block'>
              <Image src='/logo-peduli-bumi.svg' width={60} height={60} alt='logo' />
            </Navbar.Brand>
            <Nav className='me-auto mb-3 mb-md-0'>
              <Nav.Link href='/'>Beranda</Nav.Link>
              <Nav.Link href='/activities'>Aktivitas</Nav.Link>
              <Nav.Link href='/submission'>Pengajuan</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className='d-flex justify-content-center align-items-center'>
            <Nav.Link href='/signin' className='me-3'>
              Masuk
            </Nav.Link>
            <div className={styles.navButton}>
              <Nav.Link href='/signup'>Daftar</Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>

      {children}

      {/* Footer */}
      <div
        className='d-inline-block'
        style={{ backgroundColor: '#F8DAC4', paddingInline: '5rem', width: '100%' }}
      >
        <Container fluid className='mt-5 mb-5'>
          <Row className='justify-content-center align-items-center pb-3'>
            <Col lg={9}>
              <Row style={{ fontSize: '12px', fontWeight: '600', textAlign: 'justify' }}>
                <Col lg={4}>
                  <h6 className='fs-6 fw-bold'>Kebijakan Privasi</h6>
                  <p>
                    Pada Website ini kami dari pihak developer tidak meminta dan menyimpan data
                    pribadi dan privasi dari pengguna. Semua data akan dipastikan aman terlebih
                    dahulu oleh kami.
                  </p>
                </Col>
                <Col lg={4}>
                  <h3 className='fs-6 fw-bold'>Kebijakan Privasi</h3>
                  <p>
                    Pada Website ini kami dari pihak developer tidak meminta dan menyimpan data
                    pribadi dan privasi dari pengguna. Semua data akan dipastikan aman terlebih
                    dahulu oleh kami.
                  </p>
                </Col>
                <Col lg={4}>
                  <h3 className='fs-6 fw-bold'>Kebijakan Privasi</h3>
                  <p>
                    Pada Website ini kami dari pihak developer tidak meminta dan menyimpan data
                    pribadi dan privasi dari pengguna. Semua data akan dipastikan aman terlebih
                    dahulu oleh kami.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className='text-center'>
              <Image src='/logo-peduli-bumi.svg' width={200} height={200} alt='logo' />
            </Col>
          </Row>
          <div className='text-center pt-3' style={{ borderTop: '2px solid black' }}>
            <p style={{ fontWeight: '600' }}>
              Copyright © 2023 Peduli Bumi All Rights Reserved. Website Created by DigendongKating
              Team
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
