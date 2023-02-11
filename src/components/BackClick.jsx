import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  display: flex;
  margin-top: 15px;
  margin-left: 30px;
  text-decoration: none;
  width: 70px;
  font-size: 18px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  color: black;
  border: 1px solid grey;
`;

export const BackClick = ({ to }) => {
  return (
    <>
      <StyledLink to={to}>Go back</StyledLink>
    </>
  );
};
