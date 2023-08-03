import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchAPI';
import '../index.css';

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieById(movieId)
      .then(details => {
        setData(details);
      })
      .catch(error => console.error(`Error fetching movies by id:`, error));
  }, [movieId]);

  if (!data) return;

  return (
    <>
      <Link to={backLocation.current}>Go back</Link>
      {data && (
        <div className="infoContainer">
          <div>
            {data.backdrop_path ? (
              <img
                src={`http://image.tmdb.org/t/p/w300/${data.backdrop_path}`}
                alt={data.original_title}
              />
            ) : (
              <img
                src="./images/no_picture.jpg"
                alt="noPicture"
                style={{ width: '150px' }}
              />
            )}
          </div>
          <div className="movieDetails">
            <h1>
              {data.original_title} ({data.release_date.slice(0, 4)})
            </h1>
            <p>User Score: {(data.vote_average * 10).toFixed(2)}%</p>
            <h2>Overview </h2>
            <p>{data.overview}</p>
            <h2>Genres</h2>
            {data.genres.length > 0 && (
              <ul>
                {data.genres.map(item => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      )}

      <h3>Additional Information</h3>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Views</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
