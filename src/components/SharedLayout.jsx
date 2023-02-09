import { Outlet } from 'react-router';

import {
  Container,
  StyledLink,
  Header,
  Navigation,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <Outlet />
    </Container>
  );
};
