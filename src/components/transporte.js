import styled from "styled-components";
import TransportionSuvIcon from "./icons/transportion_suv_icon";

const TransporteStyled = styled.div`
  background-color: var(--box4);
  block-size: 100%;
  inline-size: 100%;
  display: flex;
  flex-direction: column;

  padding-block: 1rem;
  padding-inline: 2rem;
  box-sizing: border-box;
  gap: 0.3rem;
  justify-content: space-between;

  * {
    margin: 0;
    color: var(--oscuro);
  }
  h2 {
    font: var(--cinco);
  }
  .transContainer {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  h3 {
    font: var(--siete);
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }
  .barra {
    border-bottom: 2px solid var(--background);
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .carros {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  h4 {
    font: var(--siete);
    text-decoration-line: underline;
  }
  h5 {
    font: var(--nueve);
  }
`;

function Transporte() {
  return (
    <TransporteStyled>
      <div className="barra">
        <div className="transContainer">
          <h2>
            CONTACTA TU TRANSPORTE
            <br />
            DE BOGOTÁ A TU HOTEL
            <br />
            EN VILLAVICENCIO
          </h2>
          <TransportionSuvIcon />
        </div>
        <h3>
          Las siguientes empresas ofrecen camionetas privadas que te llevarán
          desde cualquier punto de Bogotá (incluyendo el aeropuerto) hasta el
          hotel ghl en Villavicencio
        </h3>
      </div>
      <div className="carros">
        <h4>Carlos Calle Expresos</h4>
        <h4>Alex Domicilios</h4>
        <h4>Puerta a Puerta BOGVVC</h4>
      </div>
      <div>
        <h5>
          "El servicio tiene un costo aproximado de 60 USD, donde podrás viajar
          solo o con algún compañero que tambien asistirá a la boda
        </h5>
      </div>
    </TransporteStyled>
  );
}

export default Transporte;
