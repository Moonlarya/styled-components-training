import React from "react";
import Checkbox from "../../components/Checkbox";
import Wrapper from "../../components/Wrapper";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Wrapper>
      <Logo />
      <h1>Sign in</h1>
      <Input />
      <Input />
      <Checkbox />
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </Wrapper>
  );
};
export default SignIn;
