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
          <div className='d-flex justify-content-center alidgn-items-center'>
            <Nav.Link href='/signin' className='me-3'>
              Masuk
            </Nav.Link>
            <div className={styles.navButton}>
              <Nav.Link href='/signup'>Daftar</Nav.Link>
            </div>
          </div>
        </Container>
      </Navbar>

      {/*Landing Page*/}

      <div class="hero" style={{ backgroundColor: '#FFF6EC', height: '725px' }}>
        <Container className={styles.heroContent}>
          <h1 className={styles.captionHero}>
            Jaga Bumi
          </h1>
          <h2 className={styles.caption2Hero}>
            Lindungi Masa Depan Bersama
          </h2>
          <p className={styles.descHero}>
            Kami adalah ekosistem yang terdiri dari beragam komunitas dan relawan di berbagai tempat. Ayo gabung dan bantu kami menjalankan misi untuk menjaga bumi demi masa depan bumi yang lebih baik.
          </p>
          <button className={styles.buttonHero}>
            Ayo Mulai
          </button>
          <Image className={styles.backHero} src='/Background Hero.png' width={560} height={405} />
          <Image className={styles.fotoHero} src='/FotoHero.png' width={445} height={322} />
        </Container>
      </div>


      
      <div class="activities" style={{ backgroundColor: '#FAEADE', height: '842px' }}>
        <Container fluid className='d-flex justify-content-center align-items-center'>
          {children}
        </Container>
      </div>



      <div class="for you" style={{ backgroundColor: '#FFF6EC', height: '1110px' }}>
        <Row className={styles.FUContent} style={{ height: '410px' }}>
          <text className={styles.textFU} style={{ color: '#242C48', height: '67px' }}>
            Manfaat Menjadi Relawan
          </text>
          <Container style={{ height: '60px', width: '1200px' }}>
            <text2 className={styles.text2FU}>
              Dapatkan berbagai manfaat ketika kamu menjadi relawan, karena disini kamu bisa menambah pengalaman serta kami senang untuk berbagi canda dan tawa.
            </text2>
          </Container>
          <Row className={styles.boxFU}>
            <Image className={styles.imageBox} src='/tujuanFU.png' />
            <text1 className={styles.textBox}>
              Memberi Tujuan
            </text1>
            <text2 className={styles.text2Box}>
              Kamu mungkin dapat menemukan tujuan dengan menjadi bagian dari sesuatu yang lebih besar dan lebih hebat dari dirimu
            </text2>
          </Row>
          <Row className={styles.boxFU}>
            <Image className={styles.imageBox} src='/relasiFU.png' />
            <text1 className={styles.textBox}>
              Bertemu teman baru
            </text1>
            <text2 className={styles.text2Box}>
              Menjadi relawan adalah salah satu cara untukmu mendapatkan relasi yang lebih luas dan teman yang sefrekuensi dengan mu
            </text2>
          </Row>
          <Row className={styles.boxFU}>
            <Image className={styles.imageBox} src='/kepekaanFU.png' />
            <text1 className={styles.textBox}>
              Meningkatkan kepekaan
            </text1>
            <text2 className={styles.text2Box}>
              Menjadi relawan di suatu komunitas meningkatkan kepekaan dan wawasan mu terhadap apa yang terjadi pada lingkungan sekitar mu
            </text2>
          </Row>
        </Row>
        <Row className={styles.FUContent} style={{ height: '500px', marginTop: '90px', padding: '0px' }}>
          <text className={styles.textFU} style={{ color: '#579E1F', height: '67px' }}>
            Aktivitas Untuk Kamu
          </text>
          <text2 className={styles.text2FU} style={{ height: '30px' }}>
            Berikut beberapa saran kegiatan yang dapat kamu lakukan
          </text2>
          <Row style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px' }}>
            <Row className={styles.cardFU} style={{ marginLeft: '0px' }}>
              <Image className={styles.imageCard} src='/card1.png' />
              <Row className={styles.dateCard} >
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px' }}>
                  11
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px', color: '#7AC241' }}>
                  July
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  2023
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '205px', position: 'relative' }}>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px' }}>
                  Membersihkan Pantai
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px', color: '#7AC241' }}>
                  Kuta Beach - Clean Up
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  Pantai Kuta, Badung, Bali
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '50px' }}>
                <div className={styles.profileCard} style={{ backgroundColor: '#83EFBB' }}></div>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '10px', color: '#7AC241', left: '0', textAlign: 'center', lineHeight: '12px', top: '5px' }}>
                  Pecinta Senja
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '8px', left: '0' }}>
                  komunitas
                </text>
              </Row>
            </Row>
            <Row className={styles.cardFU}>
              <Image className={styles.imageCard} src='/card2.png' />
              <Row className={styles.dateCard}>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px' }}>
                  24
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px', color: '#7AC241' }}>
                  July
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  2023
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '205px', position: 'relative' }}>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px' }}>
                  Membersihkan Pantai
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px', color: '#7AC241' }}>
                  Bersih - Bersih Nunggalan
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  Pantai Nunggalan, Badung, Bali
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '50px' }}>
                <div className={styles.profileCard} style={{ backgroundColor: '#83D5EF' }}></div>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '10px', color: '#7AC241', left: '0', textAlign: 'center', lineHeight: '12px', top: '5px' }}>
                  Tepi Pantai
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '8px', left: '0' }}>
                  komunitas
                </text>
              </Row>
            </Row>
            <Row className={styles.cardFU}>
              <Image className={styles.imageCard} src='/card3.png' />
              <Row className={styles.dateCard}>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px' }}>
                  02
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '16px', color: '#7AC241' }}>
                  Aug
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  2023
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '205px', position: 'relative' }}>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px' }}>
                  Membersihkan Pantai
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '14px', color: '#7AC241' }}>
                  Membersihkan Balangan
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '11px' }}>
                  Pantai Balangan, Badung, Bali
                </text>
              </Row>
              <Row className={styles.dateCard} style={{ width: '50px' }}>
                <div className={styles.profileCard} style={{ backgroundColor: '#E77F92' }}></div>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '700', fontSize: '10px', color: '#7AC241', left: '0', textAlign: 'center', lineHeight: '12px', top: '5px' }}>
                  Peduli Pesisir
                </text>
                <text className={styles.textdateC} style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '8px', left: '0', color: '#242C48' }}>
                  komunitas
                </text>
              </Row>
            </Row>
            <button className={styles.buttonFU}>
              Aktivitas Lainnya
              <Image src='/up.png' style={{ width: '24px', height: '24px', marginLeft: '8px', marginBottom: '2px' }} />
            </button>
          </Row>
        </Row>
      </div>
      
      

      <div class="review" style={{ backgroundColor: '#FAEADE', height: '625px' }}>
        <Row className={styles.reviewBack} >
          <text className={styles.textFU} style={{ alignItems: 'normal', height: '58px', color: '#242C48' }}>
            Ulasan Relawan
          </text>
          <div className={styles.elemenReview}></div>
          <text2 className={styles.text2FU} style={{ height: '24px', alignItems: 'normal' }}>
            Kata - kata relawan tentang kami
          </text2>
          <Row className={styles.backCard}>
          <Col className={styles.cardReview}>
              <Container style={{ background: '#EB7C6D' }} className={styles.profileReview}></Container>
              <Container style={{ width: '325px', height: '250px', background: '#FFF6EC', borderRadius: '12px' }}>
                <text style={{ fontWeight: '700' }} className={styles.textReview}>
                  Madya Sentosa
                </text>
                <text className={styles.textReview}>
                  Mahasiswa
                </text>
                <Image className={styles.imageReview}  src='/gapReviewCard.png' width={'57px'} height={'57px'} />
                <text className={styles.text2Review} >
                  Senang rasanya bisa bergabung menjadi salah satu relawan di kegiatan-kegiatan seperti ini, rasanya seperti kita menjadi bagian penting dari perjalanan menuju bumi yan lebih baik.
                </text>
              </Container>
            </Col>
            <Col className={styles.cardReview}>
              <Container style={{ background: '#33B7E1' }} className={styles.profileReview}></Container>
              <Container style={{ width: '325px', height: '250px', background: '#FFF6EC', borderRadius: '12px' }}>
                <text style={{ fontWeight: '700' }} className={styles.textReview}>
                  Steven Belva
                </text>
                <text className={styles.textReview}>
                  Mahasiswa
                </text>
                <Image className={styles.imageReview}  src='/gapReviewCard.png' width={'57px'} height={'57px'} />
                <text className={styles.text2Review} >
                Pengalaman pertama ku menjadi relawan di Peduli Bumi engga akan pernah terlupa. Kegiatannya seru dan asyik banget, dan aku bisa bertemu dengan teman-teman baru dari berbagai tempat
                </text>
              </Container>
            </Col>
            <Col className={styles.cardReview}>
              <Container style={{ background: '#73E285' }} className={styles.profileReview}></Container>
              <Container style={{ width: '325px', height: '250px', background: '#FFF6EC', borderRadius: '12px' }}>
                <text style={{ fontWeight: '700' }} className={styles.textReview}>
                  Gus Ryan
                </text>
                <text className={styles.textReview}>
                  Mahasiswa
                </text>
                <Image className={styles.imageReview}  src='/gapReviewCard.png' width={'57px'} height={'57px'} />
                <text className={styles.text2Review} >
                Sumpah kalian harus banget coba jadi relawan di Peduli Bumi. Awalnya aku juga skeptis banget sama kegiatan-kegiatan kayak gini, tapi setelah diajakin temen dan dijalanin ternyata kegiatannya seru banget
                </text>
              </Container>
            </Col>
          </Row>
        </Row>
      </div>

      <Container fluid className='d-flex justify-content-center align-items-center'></Container>

      {/* Footer */}
      <div className='d-inline-block' style={{ backgroundColor: '#F8DAC4', paddingInline: '5rem' }}>
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
