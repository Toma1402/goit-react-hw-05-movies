import { fetchTrendMovieById } from 'helpers/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieProfile } from 'components/MovieProfile';
import { BackClick } from 'components/BackClick';

export const MovieDetails = () => {
  const { id } = useParams('');
  const [movieById, setMovieById] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieById = await fetchTrendMovieById(id);
        setMovieById(movieById);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [id]);
  console.log(movieById);
  return (
    <>
      <BackClick />
      {movieById && <MovieProfile details={movieById} />}
    </>
  );
};
