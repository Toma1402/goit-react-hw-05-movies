import { useState } from 'react';
import { SearchBtn, SearchForm, StyledInput } from './SearchBox.styled';

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
    <SearchForm onClick={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Enter name movie"
        onChange={handleInput}
        autoComplete="off"
        autoFocus
        value={query}
      />
      <SearchBtn type="submit">Search</SearchBtn>
    </SearchForm>
  );
};
