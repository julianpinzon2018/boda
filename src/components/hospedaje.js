import styled from "styled-components";
import GhlIcon from "./icons/ghl_icon";
import HotelBellIcon from "./icons/hotel_bell_icon";

const HospedajeStyled = styled.div`
  background-color: var(--box3);
  block-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-block: 1rem;
  padding-inline: 1.5rem;

  color: var(--oscuro);
  box-sizing: border-box;

  * {
    margin: 0;
  }
  .reservaLogo {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    border-bottom: 2px solid var(--background);
    margin-block-end: 0.5rem;
  }
  h2 {
    font: var(--cinco);
    font-size: 1.4rem;
  }
  h3 {
    font: var(--seis);
    font-size: 1.2rem;
  }
  h4 {
    margin-block-start: 1.2rem;
    margin-block-end: 0.3rem;
    font: var(--seis);
    font-size: 1.1rem;
  }
  h5 {
    font: var(--tres);
  }
  .iconoGhl {
    display: flex;
    justify-content: center;
    margin-inline-end: 7rem;
  }
  .reservaTitle {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
`;

function Hospedaje() {
  return (
    <HospedajeStyled>
      <div className="reservaLogo">
        <div className="reservaTitle">
          <div>
            <h2>RESERVA TU HOSPEDAJE</h2>
            <h3>en Villavicencio</h3>
          </div>
          <HotelBellIcon />
        </div>
        <h4>Sugerimos este hotel</h4>
      </div>
      <div className="iconoGhl">
        <GhlIcon />
      </div>
      <h5>Pregunta por la boda de Mao y Luisa</h5>
    </HospedajeStyled>
  );
}

export default Hospedaje;
