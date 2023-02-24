import styled from "styled-components";
import ConoceVillavicencio from "./conoceVillavicencio";
import Invitacion from "./invitacion";
import Itinerario from "./itinerario";
import Pasos from "./pasos";
import imgBackgFotter from "./images/vintage_footer_background_image.png";
import image from "./images/header_images.png";
import MesaDeRegalos from "./mesaDeRegalos";
import PieDePagina from "./pieDePagina";

const LayoutStyled = styled.main`
  inline-size: 100vw;
  overflow-x: hidden !important;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  .imageBackground {
    position: absolute;
    inset-block-start: 0;
    inline-size: 100%;
    z-index: -1;
  }

  .imgBackgFotter {
    position: absolute;
    inline-size: 100%;
    block-size: auto;
    z-index: -1;
    inset-block-end: 0;
  }
`;

function Layout() {
  return (
    <LayoutStyled>
      <img className="imageBackground" src={image} alt="" />

      <Invitacion />
      <Pasos />
      <ConoceVillavicencio />
      <Itinerario />
      <MesaDeRegalos />
      <PieDePagina />

      <img className="imgBackgFotter" src={imgBackgFotter} alt="" />
    </LayoutStyled>
  );
}

export default Layout;
