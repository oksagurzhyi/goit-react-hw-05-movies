import axios from 'axios';

const API_KEY = '656a2d8477e687091ecc4ce165a9fa7c';

export async function fetchMoviesTrend() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
}

export async function fetchMovieById(movie_id) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
  );
  return data;
}

export async function fetchMovieByName(query) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
}

export async function movieCredits(movie_id) {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`);
  return data;
}

export async function movieReviews(movie_id) {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`);
  return data;
}
