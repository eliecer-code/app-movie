import React from "react";
import { ContainerLogin } from "../../styles/ProfileStyles/ProfileStyles";
import Profile from "./Profile/Profile";
import Form from "./Form/Form";
import Or from "./Or/Or";
import LoginWidth from "./LoginWith/LoginWidth";

function Login() {
  return (
    <>
      <ContainerLogin>
        <Profile />
        <Form />
        <Or />
        <LoginWidth />
      </ContainerLogin>
    </>
  );
}

export default Login;
