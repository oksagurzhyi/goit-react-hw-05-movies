import { Link, useLocation } from 'react-router-dom';

const MovieInfo = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data &&
        data.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieInfo;
