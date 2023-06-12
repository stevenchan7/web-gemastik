import { Container, Row, Col } from 'react-bootstrap';
import ActivityCard from './ActivityCard';
import activities from '@/data/activity/activity.json';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Activity() {
  return (
    <Container>
      <Row className='justify-content-center align-items-center'>
        <Col xs={12} className='text-center mb-3'>
          <h2 style={{ fontWeight: '800' }}>Beragam Jenis Aktivitas</h2>
          <p style={{ fontWeight: '500' }}>
            Banyak cara dapat dilakukan untuk menjaga Bumi, maka dari itu kami menyediakan berbagai
            macam aktivitas menarik yang bisa kamu coba untuk membantu komunitas kami
          </p>
        </Col>
        {/* <Col lg={9} xl={8} xxl={10}>
          <Row>
            {activities.map((act, index) => (
              <Col xs={12} lg={6} xxl={4} className='mb-4'>
                <ActivityCard key={index} activity={act} />
              </Col>
            ))}
          </Row>
        </Col> */}
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
  );
}
