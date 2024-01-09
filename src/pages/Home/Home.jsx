import { useEffect, useState } from 'react';
import { fetchTrending } from '../../servises/themoviedbAPI';
import { Notify } from 'notiflix';

import Loader from 'components/Loader/Loader';
import Slider from 'components/Slider/Slider';

const Home = () => {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingList = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchTrending().then(films => {
          setFilms(films);
        });
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingList();
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      <Slider films={films} />
    </>
  );
};

export default Home;
