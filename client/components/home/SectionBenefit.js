import styles from '@/styles/Layout.module.css';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function Benefit() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center p-0 pt-5'>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col xs={12} className='mb-3'>
            <h2 style={{ fontWeight: '800' }}>Manfaat Menjadi Relawan</h2>
            <p style={{ fontWeight: '500' }}>
              Dapatkan berbagai manfaat ketika kamu menjadi relawan, karena disini kamu bisa
              menambah pengalaman serta kami senang untuk berbagi canda dan tawa.
            </p>
          </Col>
          <Col xs={8} lg={4}>
            <Image src='/home/tujuanFU.png' width={100} height={100} />
            <p className={styles.textBox}>Memberi Tujuan</p>
            <p className={styles.text2Box}>
              Kamu mungkin dapat menemukan tujuan dengan menjadi bagian dari sesuatu yang lebih
              besar dan lebih hebat dari dirimu
            </p>
          </Col>
          <Col xs={8} lg={4}>
            <Image src='/home/relasiFU.png' width={100} height={100} />
            <p className={styles.textBox}>Bertemu teman baru</p>
            <p className={styles.text2Box}>
              Menjadi relawan adalah salah satu cara untukmu mendapatkan relasi yang lebih luas dan
              teman yang sefrekuensi dengan mu
            </p>
          </Col>
          <Col xs={8} lg={4}>
            <Image src='/home/kepekaanFU.png' width={100} height={100} />
            <p className={styles.textBox}>Meningkatkan kepekaan</p>
            <p className={styles.text2Box}>
              Menjadi relawan di suatu komunitas meningkatkan kepekaan dan wawasan mu terhadap apa
              yang terjadi pada lingkungan sekitar mu
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
