import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 40px;
  background-color: #efd7d2;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;

  color: #dc654d;

  padding: 10px;
  border: 1px solid #dc654d;
  border-radius: 10px;
`;
