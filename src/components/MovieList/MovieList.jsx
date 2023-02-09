import { StyledLink, TrendsList, TrendsItem } from './MovieList.styled';

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
