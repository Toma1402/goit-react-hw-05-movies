import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a34ad8d88567ad499afdd0c300d9d1af';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchTrendMovieById = async id => {
  const resp = await axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`);
  return resp.data;
};

export const fetchCast = async id => {
  const resp = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return resp.data.cast;
};

export const fetchReviews = async id => {
  const resp = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return resp.data.results;
};

export const fetchSearchedMovies = async searchQuery => {
  const resp = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`
  );
  return resp.data.results;
};
