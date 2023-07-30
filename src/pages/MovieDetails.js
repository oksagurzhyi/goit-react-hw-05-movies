import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <h2>Additional Information</h2>
      <Link to="/">Go back</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="views">Views</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
