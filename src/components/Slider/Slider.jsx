import css from './Slider.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Slider = ({ films }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay]}
        className={css.swiperContainer}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        slidesPerView={3}
        speed={3500}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
      >
        {films &&
          films.map(({ id, title, name, poster_path, original_title }) => (
            <SwiperSlide key={id}>
              <Link to={`/movies/${id}`} className={css.link}>
                <img
                  class="swiper-slide"
                  // className={css.swiperContainer}
                  width="350px"
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : defaultImg
                  }
                  alt={original_title}
                />
                <div className={css.subtitle}>{!title ? name : title}</div>
              </Link>
              <div></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div class="swiper-pagination"></div>
    </>
  );
};

export default Slider;
