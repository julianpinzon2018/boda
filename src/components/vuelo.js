import styled from "styled-components";
import AirplaneBogColIcon from "./icons/airplane_bog_col_icon.js";
import AeromexicoLogo from "./icons/aeromexico_logo.js";
import ArgentineArilinesLogo from "./icons/argentine_arilines_logo.js";
import AviancaLogo from "./icons/avianca_logo.js";
import LatamLogo from "./icons/latam_logo.js";
import NumberOneIcon from "./icons/number_one_icon";

const VueloStyled = styled.div``;

function Vuelo() {
  return (
    <VueloStyled className="containerTarjetaPasos" id="vuelo">
      <div className="icono">
        <NumberOneIcon />
      </div>
      <div className="superiorBarra">
        <div className="containerTitleLogo">
          <h1>RESERVA TU VUELO YA</h1>
          <AirplaneBogColIcon />
        </div>
        <div className="containerInferiorLogo">
          <p>
            Es más económico comprarlo con tiempo que hacerlo sobre la fecha del
            viaje
          </p>
          <h2>
            Fecha sugerida
            <br />
            <span className="styleFecha"> 16/06/2023 - 19/06/2023</span>
          </h2>
          <h3>Aerolineas que te recomendamos:</h3>
        </div>
      </div>
      <div className="contenAero">
        <AviancaLogo />
        <AeromexicoLogo />
        <LatamLogo />
        <ArgentineArilinesLogo />
      </div>
    </VueloStyled>
  );
}

export default Vuelo;
