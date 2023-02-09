import { MovieList } from 'components/MovieList/MovieList';
import { TrendPage } from 'components/MovieList/MovieList.styled';
import { fetchTrendingMovies } from 'helpers/API';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const arr = await fetchTrendingMovies();
        setMovies(arr);
      } catch (err) {
        console.log(err);
      }
    };
    getTrends();
  }, []);
  return (
    <main>
      <TrendPage>
        <h1>Trending today:</h1>
        <MovieList trends={movies} />
      </TrendPage>
    </main>
  );
};
