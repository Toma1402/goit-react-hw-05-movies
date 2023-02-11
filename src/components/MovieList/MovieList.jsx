import { StyledLink, TrendsList, TrendsItem } from './MovieList.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

export const MovieList = ({ trends }) => {
  const location = useLocation()
  return (
    <TrendsList>
      {trends.map(({ id, title, name }) => (
        <TrendsItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{from: location}}>{title || name}</StyledLink>
        </TrendsItem>
      ))}
    </TrendsList>
  );
};
MovieList.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
