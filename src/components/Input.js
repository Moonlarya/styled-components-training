import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin: 10px;
    border: 1px solid #fafafa;
    border-radius: 10px;
  `;
  return <Input {...props}></Input>;
};

export default Input;
