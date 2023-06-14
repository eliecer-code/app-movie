import React from "react";
/* import PersonIcon from "@mui/icons-material/Person"; */
import user from "../../../assets/img/user.png";
import {
  ContainerElements,
  Image,
  Img,
} from "../../../styles/ProfileStyles/ProfileStyles";
/* import { FaUserAlt } from "react-icons/fa"; */
function Profile() {
  return (
    <>
      <ContainerElements>
        <Img width="100px" height="100px">
          <Image width="100%" src={user} />
        </Img>
      </ContainerElements>
    </>
  );
}

export default Profile;
