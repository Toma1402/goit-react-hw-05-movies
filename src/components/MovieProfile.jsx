import { baseImgUrl } from 'helpers/baseUrl';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieProfile = ({
  details: { poster_path, title, name, vote_average, overview, genres },
}) => {
  console.log(genres);

  return (
    <div>
      <div>
        <img src={baseImgUrl + poster_path} alt={title || name} />
      </div>
      <div>
        <h1>{title || name}</h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
