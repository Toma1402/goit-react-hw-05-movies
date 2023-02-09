import { SearchBox } from 'components/SearchBox';
import { fetchSearchedMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { SearchedMovie } from 'components/SearchedMovie';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  console.log(searchMovies);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchSearchedMovies(movieName);
        setSearchMovies(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieName]);
  const handleSearch = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <SearchBox onSubmit={handleSearch} />
      <SearchedMovie movies={searchMovies} />
    </div>
  );
};
