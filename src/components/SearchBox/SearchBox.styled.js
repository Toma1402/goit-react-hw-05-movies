import styled from 'styled-components';

export const SearchForm = styled.form`
  padding-top: 20px;
  align-items: center;
`;
export const StyledInput = styled.input`
  padding: 8px 32px 8px 8px;
  width: 250px;
  border-image: linear-gradient(225deg, #c6ffdd 0%, #fbd786 50%, #f7797d 100%) 1 /
    1 / 0 stretch;
  border-width: 2px;
  border-style: solid;
  font: inherit;
  outline: none;
  opacity: 0.7;
  transition: opacity 250ms ease-in-out 0s;
`;
export const SearchBtn = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: #f3e6c6;
  border: 1px solid #f3e6c6;
`;
