import styled from "styled-components";
import image from "./images/header_images.png";
import imageFoto from "./images/Maoylu_colorful_header_image.png";
import anillos from "./images/wedding_rings_circle.png";
import InvitedBadge from "./icons/invited_badge";
import BadgeWelcomeToColombia from "./icons/badge_welcome_to_colombia";

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
    margin-top: 0.6rem;
  }
  .invitacion * {
    text-align: center;
  }
  .invitacionFoto {
    color: var(--casar);
  }

  .nombres {
    font: var(--secondary);
    font-size: 2.7rem;
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
    margin-block-start: -2.5rem;
    margin-block-end: 0.5rem;
  }
  .contenNombres {
    border-block: 3px solid var(--barra);
    inline-size: auto;
    margin: auto;
  }
  .fecha {
    font: var(--tres);
    color: var(--oscuro);
    font-size: 1rem;
  }
  .lugar {
    font: var(--siete);
    color: var(--casar);
    margin: 0;
  }
  .datos {
    margin-block-start: 0.7rem;
    margin-block-end: 0.1rem;
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
  .queremos {
    font: var(--seis);
    font-size: 0.9rem;
    color: var(--amarillo);
    margin: 0;
  }
  .footerInvitacion {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-block: 0.5rem;
  }
  .anillo {
    width: auto;
    height: 4rem;
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
          <h4 className="queremos">
            Queremos que este viaje sea increible
            <br />
            Preparate para escribir esta historia con nosotros
          </h4>
          <div className="footerInvitacion">
            <img className="anillo" src={anillos} alt="" />
            <BadgeWelcomeToColombia />
          </div>
        </div>
      </div>
    </ProfileStyled>
  );
}

export default Invitacion;
