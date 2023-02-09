import { useState } from 'react';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <form onClick={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name movie"
        onChange={handleInput}
        autoComplete="off"
        autoFocus
        value={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};
