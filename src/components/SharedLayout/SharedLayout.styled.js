import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdMovieFilter } from 'react-icons/md';
import background from 'images/background.jpg';

export const Container = styled.section`
  &:before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
    filter: blur(5px);
  }
`;

export const Header = styled.header`
  padding: 40px;
  background-image: linear-gradient(
    225deg,
    #c6ffdd 0%,
    #fbd786 50%,
    #f7797d 100%
  );
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-weight: 800;
  transition: all 0.3s ease-in-out 0s;
  position: relative;
  &:hover,
  &:focus {
    color: #a44f2d;
    text-shadow: #f8d72d 3px 3px 20px, #f8d72d -2px 1px 30px;
  }
  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #a44f2d;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;
export const HeaderIcon = styled(MdMovieFilter)`
  width: 70px;
  height: 60px;
`;
