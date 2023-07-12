import styles from '@/styles/Layout.module.css';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center p-0 pt-5 pb-5'>
      <Container className={styles.heroContent}>
        <Row>
          <Col className={styles.heroTextContainer}>
            <h1 className={styles.captionHero}>
              Jaga Bumi <br /> <span style={{ color: '#7AC241' }}>Lindungi Masa Depan Bersama</span>
            </h1>
            <p className={styles.descHero}>
              Kami adalah ekosistem yang terdiri dari beragam komunitas dan relawan di berbagai
              tempat. Ayo gabung dan bantu kami menjalankan misi untuk menjaga bumi demi masa depan
              bumi yang lebih baik.
            </p>
            <Button className={styles.buttonHero}>Ayo Mulai</Button>
          </Col>
          <Col className={styles.heroImgContainer}>
            <div className='position-relative'>
              <Image
                className={styles.backHero}
                src='/Background Hero.png'
                width={560}
                height={405}
              />
              <Image className={styles.fotoHero} src='/FotoHero.png' width={445} height={322} />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
