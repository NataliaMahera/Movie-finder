import { Link } from 'react-router-dom';
import css from './TrandingHomeList.module.css';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TrandingHomeList = ({ films }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul>
        {films &&
          films.map(({ id, title, name, poster_path, original_title }) => (
            <SwiperSlide key={id}>
              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer"></div>
              <img
                width="300px"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImg
                }
                alt={original_title}
              />

              <Link to={`/movies/${id}`}>{!title ? name : title}</Link>
            </SwiperSlide>
          ))}
      </ul>
    </>
  );
};

export default TrandingHomeList;
