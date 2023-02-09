import { TrendingList } from 'components/TrendingList';
import { fetchTrendingMovies } from 'helpers/API';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const arr = await fetchTrendingMovies();
        setMovies(arr);
        console.log(arr);
      } catch (err) {
        console.log(err);
      }
    };
    getTrends();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingList trends={movies} />
    </main>
  );
};
