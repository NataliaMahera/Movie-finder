import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/themoviedbAPI';
import { Notify } from 'notiflix';
import css from './Review.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewDetails, setReviewDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchAuthorReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchReviews(movieId).then(reviewDetails => {
          setReviewDetails(reviewDetails);
        });
      } catch {
        setError(error);
        Notify.failure('Oops, something went wrong!');
      } finally {
        setLoading(false);
      }
    };
    fetchAuthorReviews();
  }, [error, movieId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {reviewDetails.length !== 0 ? (
        <ul className={css.list}>
          {reviewDetails.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.notification}>
          Sorry, we don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
};

export default Reviews;
