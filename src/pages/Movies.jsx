import { SearchBox } from 'components/SearchBox/SearchBox';
import { fetchSearchedMovies } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';
import { MoviePage } from './Movies.styled';

const Movies = () => {
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
    <MoviePage>
      <SearchBox onSubmit={handleSearch} />
      <MovieList trends={searchMovies} />
    </MoviePage>
  );
};
export default Movies;
