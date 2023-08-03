import FormMovie from 'components/FormMovie/FormMovie';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/fetchAPI';

const Movies = () => {
  const [data, setData] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryToFetch = searchParams.get('query');

  const onSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!queryToFetch) {
      return;
    }
    fetchMovieByName(queryToFetch)
      .then(data => setData(data.results))
      .catch(error => console.error(`Error fetching movies by name:`, error));
  }, [queryToFetch]);

  return (
    <>
      <>
        <FormMovie onSubmit={onSubmit} />
      </>
      <>
        <MovieInfo data={data} />
      </>
    </>
  );
};

export default Movies;
