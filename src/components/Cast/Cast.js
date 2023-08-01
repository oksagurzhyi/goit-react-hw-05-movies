import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCredits } from 'services/fetchAPI';

const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    movieCredits(movieId).then(setData);
  }, [movieId]);

  return (
    <>
      <div>
        {data &&
          data.cast.map(({ name, character, profile_path }) => {
            return (
              <div key={name}>
                <img
                  src={`http://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character {character}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Cast;
