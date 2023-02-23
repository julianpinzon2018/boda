import styled from "styled-components";
import ConoceVillavicencio from "./conoceVillavicencio";
import Invitacion from "./invitacion";
import Itinerario from "./itinerario";
import MesaDeRegalos from "./mesaDeRegalos";
import Pasos from "./pasos";

const LayoutStyled = styled.main`
  inline-size: 100vw;
  min-block-size: 100vh;
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
