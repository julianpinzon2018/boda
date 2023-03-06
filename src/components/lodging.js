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
          <h2>Sugerimos estos hoteles</h2>
        </div>
      </div>
      <div className="icon-hotels">
        <a
          href="https://www.ghlhoteles.com/bookcore/availability/rooms/ghlvillavi/?lang=es&occupancies=%255B%257B%2522ages%2522%253A%2520%2522%2522%252C%2520%2522adults%2522%253A%25201%252C%2520%2522children%2522%253A%25200%257D%255D&rrc=1&adults=1&occp=1"
          target="_bank"
        >
          <GhlIcon />
        </a>
        <a href="https://www.estelarvillavicencio.com/" target="_bank">
          <SvgComponent />
        </a>
      </div>
    </LodgingStyled>
  );
}

export default Lodging;
