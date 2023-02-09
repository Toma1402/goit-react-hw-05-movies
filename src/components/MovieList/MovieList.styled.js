import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import filmTape from 'images/film-tape.png';

export const TrendsList = styled.ul`
  padding-top: 20px;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TrendsItem = styled.li`
  position: relative;
  padding-left: 10px;
  &:before {
    content: '';
    background-image: url(${filmTape});
    background-size: cover;
    position: absolute;
    width: 25px;
    height: 25px;
    left: -25px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 19px;
  font-weight: 600;
`;

export const TrendPage = styled.div`
  padding: 20px;
`;
