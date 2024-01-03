import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { fetchSearchByKeyWord } from 'servises/themoviedbAPI';
import Form from 'components/Form/Form';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Значення з пошукового параметру, який записується в ключ query
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = e.currentTarget.elements.searchKey.value.trim();
    if (!value) {
      return Notify.warning('Please, fill the main field');
    }

    //Зміна обєкту пошукових параметрів після сабміту форми
    setSearchParams({ query: value });
    form.reset();
  };

  useEffect(() => {
    if (!queryValue) return;

    const fetchFilmByWord = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchSearchByKeyWord(queryValue).then(
          ({ results, total_results }) => {
            setSearchedMovies(results);

            if (total_results === 0) {
              return Notify.failure(
                'Sorry, there are no mavies matching your search query. Please try again.'
              );
            }
          }
        );
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchFilmByWord();
  }, [error, queryValue]);

  return (
    <>
      <Form onFormSubmit={onFormSubmit} />
      {loading && <Loader />}
      {searchedMovies && <MoviesList searchedMovies={searchedMovies} />}
    </>
  );
};

export default Movies;
