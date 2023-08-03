import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';

import { fetchMoviesTrend } from 'services/fetchAPI';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMoviesTrend()
      .then(data => setData(data.results))
      .catch(error => console.error(`Error fetching movies trend:`, error));
  }, []);

  return <MovieInfo data={data} />;
};

export default Home;
