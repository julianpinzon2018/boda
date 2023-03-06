import styled from "styled-components";
import TransportionSuvIcon from "./icons/transportion_suv_icon";
import NumberFourIcon from "./icons/number_four_icon";

const TransportStyled = styled.div``;

function Transport() {
  return (
    <TransportStyled className="container-card-steps" id="transport">
      <div className="icon">
        <NumberFourIcon />
      </div>
      <div className="top-bar">
        <div className="container-title-logo">
          <div>
            <h1>CONTRATA TU TRANSPORTE</h1>
            <p>de Bogotá a Villavicencio</p>
          </div>
          <TransportionSuvIcon />
        </div>
        <div className="container-bottom-logo">
          <p>
            El siguiente servicio ofrece camionetas privadas que te llevarán
            desde cualquier punto de Bogotá (incluyendo el aeropuerto) hasta tu
            hotel en Villavicencio
          </p>
        </div>
      </div>
      <div className="cars">
        <a
          className="button-transport"
          href="https://wa.me/+573184842044"
          target="_bank"
        >
          Reserva tu transporte
        </a>
      </div>
      <div className="priceCar">
        <p>
          Tiene un costo aproximado de 60 USD, donde podrás viajar solo o con
          hasta 2 compañeros que tambien asistan a la boda
        </p>
      </div>
    </TransportStyled>
  );
}

export default Transport;
