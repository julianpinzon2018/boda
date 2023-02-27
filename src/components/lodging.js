import styled from "styled-components";
import GhlIcon from "./icons/ghl_icon";
import HotelBellIcon from "./icons/hotel_bell_icon";
import NumberThreeIcon from "./icons/number_three_icon";
import SvgComponent from "./icons/estelar";

const LodgingStyled = styled.div``;

function Lodging() {
  return (
    <LodgingStyled className="container-card-steps" id="lodging">
      <div className="icon">
        <NumberThreeIcon />
      </div>
      <div className="top-bar">
        <div className="container-title-logo">
          <div>
            <h1>RESERVA TU HOSPEDAJE</h1>
            <p>en Villavicencio</p>
          </div>
          <HotelBellIcon />
        </div>
        <div className="container-bottom-logo">
          <h2>Sugerimos este hotel</h2>
        </div>
      </div>
      <div className="icon-hotels">
        <SvgComponent />
        <GhlIcon />
      </div>
      <h3>Pregunta por la boda de Mao y Luisa</h3>
    </LodgingStyled>
  );
}

export default Lodging;
