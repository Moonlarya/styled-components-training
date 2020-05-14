import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/images/padlock.svg";
import Logo from "../../components/Logo";
import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignUp = () => {
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
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Logo"></img>
      </Logo>
      <h1>Sign up</h1>

      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
          check: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.surname) {
            errors.surname = "Required";
          }
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
        onSubmit={(values) => {
          if (values.check) {
            localStorage.setItem("user", JSON.stringify(values));
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div style={{ display: "flex" }}>
              <div>
                <ErrorMsg name="name" component="div" />
                <Input
                  placeholder="First name *"
                  type="text"
                  name="name"
                  valid={touched.name && !errors.name}
                  error={touched.name && errors.name}
                />
              </div>
              <div>
                <ErrorMsg name="surname" component="div" />
                <Input
                  placeholder="Last name *"
                  type="text"
                  name="surname"
                  valid={touched.surname && !errors.surname}
                  error={touched.surname && errors.surname}
                />
              </div>
            </div>
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
            <Input type="checkbox" name="check" />
            <label for="check" className="checkbox_pseudo">
              Remember
            </label>
            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="/">Have an account? Sign In</Link>
    </Wrapper>
  );
};
export default SignUp;
