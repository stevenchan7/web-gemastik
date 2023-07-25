import styles from '@/styles/Activity.module.css';
import Image from 'next/image';
import { Row, Col, Button } from 'react-bootstrap';

export default function Popup({ activity, handleClose }) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <Row>
          <Col xs={8} sm={10}>
            <h2 className='fw-bold' style={{ margin: 0 }}>
              {activity.name}
            </h2>
            <p style={{ color: '#7AC241' }}>{activity.community}</p>
          </Col>
          <Col className='text-end'>
            <button onClick={handleClose} style={{ border: 'none', backgroundColor: '#FFF6EC' }}>
              <Image
                src='/activityPage/popup-close-btn.svg'
                width={30}
                height={30}
                alt={'close button'}
              />
            </button>
          </Col>
          <Col xs={12}>
            <p>
              Waktu : Pukul 16.00 sampai 18.00 <br /> Hari / Tanggal :{' '}
              {`${activity.date} ${activity.month} ${activity.year}`} <br /> Lokasi :{' '}
              {activity.location} <br /> Kuota Tersedia : {activity.quota_curr} dari{' '}
              {activity.quota_max}
            </p>
          </Col>
          <Col xs={12} className='text-end'>
            <Button className={styles.jadiRelawanButton}>Jadi Relawan</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
