import { Suspense } from 'react';
import { Outlet } from 'react-router';

import {
  Container,
  StyledLink,
  Header,
  Navigation,
  HeaderIcon,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <HeaderIcon />
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>LOADING</div>} />
      <Outlet />
    </Container>
  );
};
