import { useState } from 'react';

const FormMovie = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onhandleChange = e => {
    const queryToFetch = e.target.value;

    setQuery(queryToFetch);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (!query) {
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" name="query" onChange={onhandleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default FormMovie;
