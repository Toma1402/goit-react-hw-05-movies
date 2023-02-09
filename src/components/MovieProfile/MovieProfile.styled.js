import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  padding: 20px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
export const Poster = styled.img`
  border-radius: 10px;
  height: 500px;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const TextWrap = styled.p`
  font-size: 18px;
`;
export const GenresWrap = styled.ul`
  display: flex;
  gap: 10px;
`;
export const AddSide = styled.div`
  margin-top: 25px;
`;
export const AddList = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 10px;
`;
export const AddItem = styled.li`
  padding: 10px 20px;
  background-image: linear-gradient(
    225deg,
    #c6ffdd 0%,
    #fbd786 40%,
    #f7797d 100%
  );
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;
