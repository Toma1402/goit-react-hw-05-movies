import { baseImgUrl } from 'helpers/baseUrl';
import { Outlet } from 'react-router-dom';
import {
  AddItem,
  AddList,
  AddSide,
  GenresWrap,
  InfoWrap,
  Poster,
  Section,
  StyledLink,
  TextWrap,
  Wrap,
} from './MovieProfile.styled';
import PropTypes from 'prop-types';

export const MovieProfile = ({
  details: { poster_path, title, name, vote_average, overview, genres },
}) => {
  return (
    <Section>
      <Wrap>
        <Poster src={baseImgUrl + poster_path} alt={title || name} />

        <InfoWrap>
          <h1>{title || name}</h1>
          <TextWrap>User Score: {Math.round(vote_average * 10)}%</TextWrap>
          <h2>Overview</h2>
          <TextWrap>{overview}</TextWrap>
          <h3>Genres</h3>
          <GenresWrap>
            {genres && genres.map(item => <li key={item.id}>{item.name}</li>)}
          </GenresWrap>
        </InfoWrap>
      </Wrap>
      <AddSide>
        <AddList>
          <AddItem>
            <StyledLink to="cast">Cast</StyledLink>
          </AddItem>
          <AddItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </AddItem>
        </AddList>
        <Outlet />
      </AddSide>
    </Section>
  );
};
MovieProfile.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};
