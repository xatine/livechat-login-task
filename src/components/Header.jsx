import React from "react";
import styled from "styled-components";

const HeaderText = styled.h1`
  font-size: 28px;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  font-weight: 700;
  padding-bottom: 24px;
`;

const Header = ({ text }) => <HeaderText>{text}</HeaderText>;

export default Header;
