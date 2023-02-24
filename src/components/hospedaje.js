import styled from "styled-components";
import GhlIcon from "./icons/ghl_icon";
import HotelBellIcon from "./icons/hotel_bell_icon";
import NumberThreeIcon from "./icons/number_three_icon";
import SvgComponent from "./icons/estelar";

const HospedajeStyled = styled.div``;

function Hospedaje() {
  return (
    <HospedajeStyled className="containerTarjetaPasos" id="hospedaje">
      <div className="icono">
        <NumberThreeIcon />
      </div>
      <div className="superiorBarra">
        <div className="containerTitleLogo">
          <div>
            <h1>RESERVA TU HOSPEDAJE</h1>
            <p>en Villavicencio</p>
          </div>
          <HotelBellIcon />
        </div>
        <div className="containerInferiorLogo">
          <h2>Sugerimos este hotel</h2>
        </div>
      </div>
      <div className="iconoHoteles">
        <SvgComponent />
        <GhlIcon />
      </div>
      <h3>Pregunta por la boda de Mao y Luisa</h3>
    </HospedajeStyled>
  );
}

export default Hospedaje;
