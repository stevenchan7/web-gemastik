import Image from 'next/image';
import { Card } from 'react-bootstrap';

export default function ReviewCard({ rev }) {
  return (
    <div className='position-relative mt-5'>
      <div
        className='position-absolute'
        style={{ top: '-40px', left: '50%', transform: 'translateX(-50%)', zIndex: '1' }}
      >
        <Image
          src='/home/pp_relawan.png'
          width={80}
          height={80}
          alt='Foto Profil'
          style={{ borderRadius: '50%', border: '5px solid #FFF6EC' }}
        />
      </div>
      <div>
        <Card
          style={{
            width: '20rem',
            height: '15rem',
            backgroundColor: '#FFF6EC',
            borderRadius: '12px',
            border: 'none',
          }}
          className='m-auto pt-4'
        >
          <Card.Body>
            <Card.Title style={{ fontSize: '14px', fontWeight: '700' }}>
              {rev.name} <br />
              <span style={{ fontSize: '12px', fontWeight: '400' }}> {rev.status} </span>
            </Card.Title>
            <Image src='/home/quote-mark.svg' width={55} height={55} alt='quote mark' />
            <Card.Text style={{ fontSize: '12px', lineHeight: '1rem' }}>{rev.rev}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
