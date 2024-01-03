import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '0bd778e99c9dd0be4a5a446585adfec9';

export const fetchTrending = async () => {
  const { data } = await axios.get(
    `trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const fetchSelectedTrending = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};

export const fetchSearchByKeyWord = async keyword => {
  const { data } = await axios.get(
    `search/movie?include_adult=false&api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`
  );
  return data;
};
