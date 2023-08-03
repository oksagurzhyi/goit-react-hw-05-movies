import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/fetchAPI';

const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieCredits(movieId)
      .then(setData)
      .catch(error => console.error(`Error fetching movies by cast:`, error));
  }, [movieId]);

  return (
    <>
      <div>
        {data?.cast.length > 0 ? (
          data.cast.map(({ name, character, profile_path }) => {
            return (
              <div key={name}>
                <img
                  src={
                    profile_path
                      ? `http://image.tmdb.org/t/p/w200/${profile_path}`
                      : '/src/images/no_picture.jpg'
                  }
                  alt={profile_path ? name : 'No Picture'}
                />
                <h3>{name}</h3>
                <p>Character {character}</p>
              </div>
            );
          })
        ) : (
          <p>We don't have any information abour casts...</p>
        )}
      </div>
    </>
  );
};
export default Cast;
