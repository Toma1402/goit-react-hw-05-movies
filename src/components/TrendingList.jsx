import { StyledLink, TrendsList, TrendsItem } from './TrendingList.styled';

export const TrendingList = ({ trends }) => {
  return (
    <TrendsList>
      {trends.map(({ id, title, name }) => (
        <TrendsItem key={id}>
          <StyledLink to={`/movie/${id}`}>{title || name}</StyledLink>
        </TrendsItem>
      ))}
    </TrendsList>
  );
};
