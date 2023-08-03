import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'services/fetchAPI';
import css from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    movieReviews(movieId)
      .then(setData)
      .catch(error =>
        console.error(`Error fetching movies for reviews:`, error)
      );
  }, [movieId]);

  if (!data) return;

  return data.results.length > 0 ? (
    <ul>
      {data?.results.length > 0 &&
        data.results.map(({ author, content, id }) => {
          return (
            <li key={id} className={css.listItem}>
              <h4>Author: {author.toUpperCase()}</h4>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  ) : (
    <p>We don't have any reviews for this films</p>
  );
};

export default Reviews;
