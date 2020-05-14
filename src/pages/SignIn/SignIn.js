import React, { useReducer } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/padlock.svg";
import Logo from "../../components/Logo";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ErrorMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;

const Input = styled(Field)`
  color: #fafafa;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  background-color: #333;
  outline: none;

  &:focus,
  &:active {
    box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.69);
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        outline: none;
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 1px solid rgb(255, 255, 0);
        outline: none;
      }
    `}
`;

const SignIn = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Logo"></img>
      </Logo>
      <h1>Sign in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setErrors }) => {
          const user = JSON.parse(localStorage.getItem("user"));
          if (
            values.password !== user.password ||
            values.email !== user.email
          ) {
            setErrors({ error: "Invalid email or password" });
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <ErrorMsg name="email" component="div" />
            <Input
              placeholder="Email*"
              type="email"
              name="email"
              valid={touched.email && !errors.email}
              error={touched.email && errors.email}
            />
            <ErrorMsg name="password" component="div" />
            <Input
              placeholder="Password*"
              type="password"
              name="password"
              valid={touched.password && !errors.password}
              error={touched.password && errors.password}
            />
            <Button type="submit" disabled={isSubmitting}>
              Sign In
            </Button>
            {errors.error && <p>{errors.error}</p>}
            <Input type="checkbox" name="check" />
            <label for="check" className="checkbox_pseudo">
              Remember
            </label>
          </Form>
        )}
      </Formik>
      <Link to="/signup">Don't have an account? Sign Up</Link>
    </Wrapper>
  );
};
export default SignIn;
