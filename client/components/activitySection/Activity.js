import { Container, Row, Col } from 'react-bootstrap';
import ActivityCard from './ActivityCard';
import activities from '@/data/home/activity.json';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Activity() {
  return (
    <Container
      fluid
      className='d-flex justify-content-center align-items-center p-0 pt-5 pb-5'
      style={{ backgroundColor: '#FAEADE' }}
    >
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} className='text-center mb-3'>
            <h2 style={{ fontWeight: '800' }}>Beragam Jenis Aktivitas</h2>
            <p style={{ fontWeight: '500' }}>
              Banyak cara dapat dilakukan untuk menjaga Bumi, maka dari itu kami menyediakan
              berbagai macam aktivitas menarik yang bisa kamu coba untuk membantu komunitas kami
            </p>
          </Col>

          <Col>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              breakpoints={{
                992: {
                  slidesPerView: 2.5,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1400: {
                  slidesPerView: 3.5,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {activities.map((act, index) => (
                <SwiperSlide key={index}>
                  <ActivityCard activity={act} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
