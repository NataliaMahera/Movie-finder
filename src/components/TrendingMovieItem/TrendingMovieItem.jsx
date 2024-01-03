import css from './TrendingMovieItem.module.css';

const TrendingMovieItem = ({ movie }) => {
  const {
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    original_title,
  } = movie || {};

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className={css.container}>
      <img
        className={css.img}
        width="300px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        alt={original_title}
      />
      <div className={css.textContainer}>
        <h2 className={css.title}>
          {original_title} ({release_date.slice(0, 4)})
        </h2>
        <p className={css.score}>User Score: {Math.round(vote_average)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres?.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendingMovieItem;
