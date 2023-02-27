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
            <h1>CONTACTA TU TRANSPORTE</h1>
            <p>de Bogotá a Villavicencio</p>
          </div>
          <TransportionSuvIcon />
        </div>
        <div className="container-bottom-logo">
          <p>
            Las siguientes empresas ofrecen camionetas privadas que te llevarán
            desde cualquier punto de Bogotá (incluyendo el aeropuerto) hasta tu
            hotel en Villavicencio
          </p>
        </div>
      </div>
      <div className="cars">
        <h2>Expresos Bog</h2>
        <h2>Transports VIP</h2>
      </div>
      <div>
        <hp>
          "El servicio tiene un costo aproximado de 60 USD, donde podrás viajar
          solo o con algún compañero que tambien asistirá a la boda
        </hp>
      </div>
    </TransportStyled>
  );
}

export default Transport;
