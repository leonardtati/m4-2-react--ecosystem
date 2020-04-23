import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
`;
const StyledTitle = styled.h1`
  color: black;
  font-size: 30px;
  text-align: left;
  justify-content: left;
`;

const StyledLinks = styled.ul`
  text-decoration: none;
  list-style-type: none;
  text-align: right;
  justify-content: right;
  color: black;

  &:hover {
    color: purple;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle> Fruit Emporium</StyledTitle>
      <StyledLinks>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </StyledLinks>
      <StyledLinks>
        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>
      </StyledLinks>
      <StyledLinks>
        <NavLink exact activeClassName="active" to="/sellers">
          sellers
        </NavLink>
      </StyledLinks>
    </StyledHeader>
  );
};

export default Header;
