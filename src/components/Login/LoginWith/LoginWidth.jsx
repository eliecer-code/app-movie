import React from "react";
import fb_logo from "../../../assets/img/fb_logo.png";
import google_logo from "../../../assets/img/google_logo.png";
import {
  ContainerElements,
  Image,
  Img,
} from "../../../styles/ProfileStyles/ProfileStyles";

function LoginWidth() {
  return (
    <>
      <ContainerElements>
        <Img width="60px" height="60px">
          <Image width="70%" src={google_logo} alt="" />
        </Img>
        <Img width="60px" height="60px">
          <Image width="70%" src={fb_logo} alt="" />
        </Img>
      </ContainerElements>
    </>
  );
}

export default LoginWidth;
