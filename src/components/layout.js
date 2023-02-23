import styled from "styled-components";
import ConoceVillavicencio from "./conoceVillavicencio";
import Invitacion from "./invitacion";
import Itinerario from "./itinerario";
import Pasos from "./pasos";

const LayoutStyled = styled.main`
  inline-size: 100vw;
  min-block-size: 100vh;
  overflow-x: hidden !important;
  overflow-y: auto;
`;

function Layout() {
  return (
    <LayoutStyled>
      <Invitacion />
      <Pasos />
      <ConoceVillavicencio />
      <Itinerario />
    </LayoutStyled>
  );
}

export default Layout;
