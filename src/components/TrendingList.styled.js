import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrendsList = styled.ul`
  padding-top: 20px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TrendsItem = styled.li``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #4b231b;
  font-size: 19px;
`;
