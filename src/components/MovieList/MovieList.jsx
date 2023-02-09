import { StyledLink, TrendsList, TrendsItem } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ trends }) => {
  return (
    <TrendsList>
      {trends.map(({ id, title, name }) => (
        <TrendsItem key={id}>
          <StyledLink to={`/movies/${id}`}>{title || name}</StyledLink>
        </TrendsItem>
      ))}
    </TrendsList>
  );
};
MovieList.propTypes = {
  trends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
