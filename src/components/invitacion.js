import styled from "styled-components";
import image from "./images/header_images.png";
import imageFoto from "./images/Maoylu_colorful_header_image.png";

import InvitedBadge from "./icons/invited_badge";

const ProfileStyled = styled.header`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  .imageBackground {
    position: absolute;
    inset-block-start: 0;
    inline-size: 100%;
    z-index: -1;
  }
  .invitacion {
    block-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    inline-size: 100vw;
    padding-inline: 0.5rem;
    padding-top: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    margin-block-start: 1rem;
  }
  .invitacion * {
    text-align: center;
  }
  .invitacionFoto {
    color: var(--casar);
  }

  .nombres {
    font: var(--secondary);
    font-size: 3rem;
    color: var(--casar);
    margin: 0;
    margin-bottom: 3px;
  }
  .foto {
    block-size: 18rem;
    inline-size: auto;
  }
  .casar {
    margin: 0;
    font: var(--primary);
    font-size: 1.3rem;
    margin-block-start: -4rem;
    margin-block-end: 0.5rem;
  }
  .contenNombres {
    border-block: 3px solid var(--barra);
    margin-inline: 5%;
  }
  .fecha {
    font: var(--tres);
    font-size: 1.2rem;
    color: var(--oscuro);
    font-size: 1rem;
  }
  .lugar {
    font: var(--siete);
    color: var(--casar);
    margin: 0;
    font-size: 0.7rem;
  }
  .datos {
    margin-block-start: 1rem;
  }
  .emocion {
    font: var(--cinco);
    font-size: 1.2rem;
    color: var(--oscuro);
    font-style: italic;
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
  }
  .para {
    color: var(--oscuro);
    font: var(--cinco);
    font-size: 1.3rem;
    margin-block-start: 0.3rem;
    margin-block-end: 0.3rem;
  }
  .invitacionLogo {
    margin-block: 1.5rem;
  }
`;

function Invitacion() {
  return (
    <ProfileStyled>
      <img className="imageBackground" src={image} alt="" />
      <div className="invitacion">
        <div className="invitacionFoto">
          <img className="foto" src={imageFoto} alt="" />
          <p className="casar">Nos vamos a casar</p>
          <div className="contenNombres">
            <h1 className="nombres">Mao & Lu</h1>
          </div>
          <div className="datos">
            <span className="fecha">17/06/2023</span>
            <p className="lugar">VILLAVICENCIO - COLOMBIA</p>
          </div>
        </div>
        <div className="invitacionLogo">
          <h2 className="emocion">
            NOS EMOCIONA COMPARTIR EL DIA MAS IMPORTANTE
            <br />
            DE NUESTRA HISTORIA CONTIGO, POR ESO ERES
          </h2>
          <InvitedBadge />
          <h3 className="para">PARA ASISTIR A LA BODA</h3>
        </div>
      </div>
    </ProfileStyled>
  );
}

export default Invitacion;
