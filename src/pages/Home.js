import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMoviesTrend } from 'services/fetchAPI';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMoviesTrend().then(data => {
      setData(data);
      console.log(data.results);
    });
  }, []);

  return (
    <ul>
      {data &&
        data.results.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to="movies/:movieId"> {original_title}</Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
