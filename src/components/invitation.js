import styled from "styled-components";

import imagePhoto from "./images/Maoylu_colorful_header_image.png";

import InvitedBadge from "./icons/invited_badge";

const ProfileStyled = styled.header``;

function Invitation() {
  return (
    <ProfileStyled className="container-component" id="invitation">
      <div className="invitation-photo">
        <img src={imagePhoto} alt="" />
        <p className="marry">Nos vamos a casar</p>
        <h1>Mao & Lu</h1>
        <div className="data">
          <span>17/06/2023</span>
          <p>VILLAVICENCIO - COLOMBIA</p>
        </div>
      </div>
      <div className="invitation-logo">
        <h2>
          NOS EMOCIONA COMPARTIR EL DÍA MÁS IMPORTANTE DE NUESTRA HISTORIA
          CONTIGO
        </h2>
        <InvitedBadge />
      </div>
    </ProfileStyled>
  );
}

export default Invitation;
