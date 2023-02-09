import { fetchTrendMovieById } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieProfile } from 'components/MovieProfile';
import { BackClick } from 'components/BackClick';

export const MovieDetails = () => {
  const { movieId } = useParams('');
  const [movieById, setMovieById] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieById = await fetchTrendMovieById(movieId);
        setMovieById(movieById);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      <BackClick />
      {movieById && <MovieProfile details={movieById} />}
    </>
  );
};
