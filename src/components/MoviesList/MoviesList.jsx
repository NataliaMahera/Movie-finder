import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ searchedMovies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {searchedMovies &&
        searchedMovies.map(({ id, title, name }) => {
          return (
            <li key={id} className={css.item}>
              <Link
                className={css.link}
                state={{ from: location }}
                key={id}
                to={`/movies/${id}`}
              >
                {!title ? name : title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
