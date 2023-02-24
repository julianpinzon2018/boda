import styled from "styled-components";

import Vuelo from "./vuelo";
import Hospedaje from "./hospedaje";
import Transporte from "./transporte";
import Maleta from "./maleta";
import BadgeWelcomeToColombia from "./icons/badge_welcome_to_colombia";

import anillos from "./images/rings_bigger.png";

const PasosStyled = styled.div``;

function Pasos() {
  return (
    <PasosStyled className="containerComponent" id="pasos">
      <div className="containerLogosAnillos">
        <div>
          <img src={anillos} alt="" />
          <BadgeWelcomeToColombia />
        </div>
        <h4>
          ¡Este viaje será increíble!
          <br />
          Prepárate para vivir esta historia
        </h4>
      </div>
      <Vuelo />
      <Maleta />
      <Hospedaje />
      <Transporte />
    </PasosStyled>
  );
}

export default Pasos;
