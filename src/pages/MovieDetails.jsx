import { fetchTrendMovieById } from 'helpers/API';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { MovieProfile } from 'components/MovieProfile/MovieProfile';
import { BackClick } from 'components/BackClick';

const MovieDetails = () => {
  const { movieId } = useParams('');
  const [movieById, setMovieById] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
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
      <BackClick to={backLinkHref.current} />
      {movieById && <MovieProfile details={movieById} />}
    </>
  );
};
export default MovieDetails;
