import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movies } from 'pages/Movies';
import { lazy } from 'react';
import { Home } from 'pages/Home';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
