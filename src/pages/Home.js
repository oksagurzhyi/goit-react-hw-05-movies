import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMoviesTrend } from 'services/fetchAPI';

const Home = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMoviesTrend().then(setData);
  }, []);

  return (
    <ul>
      {data &&
        data.results.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Home;
