import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByName } from 'services/fetchAPI';

const Movies = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const queryToFetch = searchParams.get('key');

  const onhandleChange = e => {
    const query = e.target.value;
    if (query === '') {
      return;
    } else setQuery(query);
  };

  const onSubmitForm = event => {
    event.preventDefault();

    if (event.target.elements.query.value !== '') {
      fetchMovieByName(query).then(data => {
        setData(data.results);
        setSearchParams({ key: event.target.elements.query.value });
        event.target.elements.query.value = '';
      });
    } else setSearchParams({});
  };

  useEffect(() => {
    if (queryToFetch) {
      fetchMovieByName(queryToFetch).then(data => {
        setData(data.results);
      });
    } else return;
  }, [queryToFetch]);

  return (
    <>
      <>
        <form onSubmit={onSubmitForm}>
          <input type="text" name="query" onChange={onhandleChange} />
          <button type="submit">Search</button>
        </form>
      </>
      <>
        <ul>
          {data &&
            data.map(({ id, original_title }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {original_title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </>
    </>
  );
};

export default Movies;
