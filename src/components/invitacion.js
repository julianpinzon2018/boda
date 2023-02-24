import styled from "styled-components";

import imageFoto from "./images/Maoylu_colorful_header_image.png";

import InvitedBadge from "./icons/invited_badge";

const ProfileStyled = styled.header``;

function Invitacion() {
  return (
    <ProfileStyled className="containerComponent" id="invitacion">
      <div className="invitacionFoto">
        <img src={imageFoto} alt="" />
        <p className="casar">Nos vamos a casar</p>
        <h1>Mao & Lu</h1>
        <div className="datos">
          <span>17/06/2023</span>
          <p>VILLAVICENCIO - COLOMBIA</p>
        </div>
      </div>
      <div className="invitacionLogo">
        <h2>
          NOS EMOCIONA COMPARTIR EL DÍA MÁS IMPORTANTE DE NUESTRA HISTORIA
          CONTIGO
        </h2>
        <InvitedBadge />
        <h3>PARA ASISTIR A LA BODA</h3>
      </div>
    </ProfileStyled>
  );
}

export default Invitacion;
