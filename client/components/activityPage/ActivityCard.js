import { Card } from 'react-bootstrap';
import styles from '@/styles/Activity.module.css';

export default function ActivityCard({ activity, handleToggle }) {
  return (
    <Card
      onClick={() => handleToggle(activity)}
      style={{
        backgroundColor: '#FFF6EC',
        border: '1px solid #D6925C',
        width: '300px',
        height: 'auto',
        borderRadius: '16px',
        margin: 'auto',
      }}
    >
      <Card.Img
        src='/activity/beach-cleanup.png'
        alt='beach clean up'
        style={{ borderRadius: '16px 16px 0 0' }}
        width={195}
        height={155}
      />
      <Card.Body>
        <div className={`d-flex justify-content-center align-items-top fw-bold ${styles.cardBody}`}>
          <div style={{ marginRight: '24px' }}>
            <p>{activity.date}</p>
            <p style={{ color: '#7AC241' }}>{activity.month}</p>
            <p style={{ fontSize: '8px' }}>{activity.year}</p>
          </div>
          <div style={{ textAlign: 'start', flexGrow: '1' }}>
            <p>{activity.activity}</p>
            <p style={{ color: '#7AC241' }}>{activity.name}</p>
            <p style={{ fontSize: '8px' }}>{activity.location}</p>
          </div>
          <div>
            <img src='/activity/foto-profil-komunitas.png' alt='foto profil komunitas' />
            <p style={{ fontSize: '8px', margin: '0' }}>{activity.community}</p>
            <p style={{ fontSize: '8px' }}>Komunitas</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
