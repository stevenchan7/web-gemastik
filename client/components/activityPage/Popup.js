import styles from '@/styles/Activity.module.css';

export default function Popup({ activity, handleClose }) {
  return (
    <div className={styles.popup}>
      <div className={styles.box}>
        <h2 className='fw-bold' style={{ margin: 0 }}>
          {activity.name}
        </h2>
        <p style={{ color: '#7AC241' }}>{activity.community}</p>
        <p>
          Waktu : Pukul 16.00 sampai 18.00 <br /> Hari / Tanggal :{' '}
          {`${activity.date} ${activity.month} ${activity.year}`} <br /> Lokasi :{' '}
          {activity.location} <br /> Kuota Tersedia : 10 dari 100
        </p>
        <button onClick={handleClose}>x</button>
      </div>
    </div>
  );
}
