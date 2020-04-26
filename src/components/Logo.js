import React from "react";
import styled from "styled-components";
import logo from "../assets/images/padlock.svg";

const Logo = () => {
  const Logo = styled.div`
    width: 30px;
    heigth: 30px;
    border-radius: 100%;
    background-color: pink;
    padding: 10px;
  `;
  return (
    <Logo>
      <img src={logo} alt="Logo"></img>
    </Logo>
  );
};

export default Logo;
