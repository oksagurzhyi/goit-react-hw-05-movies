import axios from 'axios';

const API_KEY = '656a2d8477e687091ecc4ce165a9fa7c';

export async function fetchMoviesTrend() {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByName() {
  try {
    const { movie } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
    );
    return movie;
  } catch (error) {
    console.log(error);
  }
}
