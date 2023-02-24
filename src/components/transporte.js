import styled from "styled-components";
import TransportionSuvIcon from "./icons/transportion_suv_icon";

const TransporteStyled = styled.div`
  background-color: var(--box4);
  block-size: 100%;
  inline-size: 100%;
  display: flex;
  flex-direction: column;

  padding-block: 1rem;
  padding-inline: 1.5rem;
  box-sizing: border-box;
  gap: 0.3rem;
  justify-content: space-between;

  * {
    margin: 0;
    color: var(--oscuro);
  }
  h2 {
    font: var(--cinco);
    line-height: 1.3rem;
    font-size: 1.4rem;
  }
  .transContainer {
    display: flex;
    justify-content: space-between;
    gap: 0.9rem;
    align-items: center;
  }
  h3 {
    margin-block-start: 1.2rem;
    font: var(--seis);
    font-size: 1.1rem;
    line-height: 1.2rem;
    margin-block-end: 0.3rem;
  }
  .barra {
    margin-block-end: 0.5rem;
    border-bottom: 2px solid var(--background);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
  .carros {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-block-end: 0.8rem;
    align-items: center;
    margin-block-end: 1rem;
    margin-block-start: 0.5rem;
  }
  h4 {
    font: var(--seis);
    font-size: 1rem;
    line-height: 1rem;
    text-decoration-line: underline;
    text-align: center;
  }
  h5 {
    font: var(--siete);
    font-size: 0.95rem;
  }
  .subTitle {
    font: var(--seis);
    font-size: 1.2rem;
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
            <span className="subTitle">de Bogotá a Villavicencio</span>
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
        <h4>Expresos</h4>
        <h4>Transportes VIP</h4>
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
