import { useEffect, useState } from 'react';
import { fetchTrending } from '../../servises/themoviedbAPI';
import { Notify } from 'notiflix';
import TrandingHomeList from 'components/TrandingHomeList/TrandingHomeList';
import Loader from 'components/Loader/Loader';

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
      <TrandingHomeList films={films} />
    </>
  );
};

export default Home;
