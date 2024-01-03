import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'servises/themoviedbAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchActorsCast = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchCast(movieId).then(castDetails => {
          setCastDetails(castDetails);
          console.log(castDetails);
        });
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchActorsCast();
  }, [movieId, error]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className={css.container}>
      {loading && <Loader />}

      {castDetails && (
        <ul className={css.list}>
          {castDetails.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img
                width="300px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <h3>{original_name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
