import './Slider.css';
import 'swiper/swiper-bundle.min.css';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  // Pagination,
  Scrollbar,
} from 'swiper';

const Slider = ({ films }) => {
  console.log(films);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <h1 className="title">Trending today</h1>
      <div className="swiper sample-slider container">
        <Swiper
          modules={[
            FreeMode,
            Autoplay,
            // Pagination,
            Navigation,
            Scrollbar,
            A11y,
          ]}
          className="swiper sample-slider "
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          //   el: '.swiper-pagination',
          // }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3500}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
        >
          {films &&
            films.map(
              ({
                id,
                title,
                name,
                poster_path,
                original_title,
                vote_average,
              }) => (
                <SwiperSlide key={id}>
                  <div className="container swiper-wrapper">
                    <Link to={`/movies/${id}`} className="link">
                      <img
                        className="image"
                        width="350px"
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : defaultImg
                        }
                        alt={original_title}
                      />
                      <div className="subtitle">{!title ? name : title}</div>
                      <p className="score">
                        User Score: {Math.round(vote_average)}
                      </p>
                    </Link>
                  </div>
                </SwiperSlide>
              )
            )}
          {/* <div className="swiper-pagination"></div> */}
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
