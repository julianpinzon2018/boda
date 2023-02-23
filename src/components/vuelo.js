import styled from "styled-components";
import AirplaneBogColIcon from "./icons/airplane_bog_col_icon.js";
import AeromexicoLogo from "./icons/aeromexico_logo.js";
import ArgentineArilinesLogo from "./icons/argentine_arilines_logo.js";
import AviancaLogo from "./icons/avianca_logo.js";
import LatamLogo from "./icons/latam_logo.js";

const VueloStyled = styled.div`
  background-color: var(--box1);
  block-size: 100%;

  display: flex;
  flex-direction: column;
  padding-block: 1.2rem;
  padding-inline-start: 3rem;
  padding-inline-end: 1.8rem;
  gap: 0.5rem;
  box-sizing: border-box;

  color: var(--oscuro);
  * {
    margin: 0;
  }
  .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--background);
  }

  h2 {
    font: var(--cinco);
    margin-bottom: 3px;
  }
  h3 {
    font: var(--seis);
    font-size: 0.6rem;
  }
  h4 {
    font: var(--siete);
  }
  h5 {
    font: var(--siete);
  }
  .reservaConten {
    display: flex;
    gap: 0.8rem;
  }
  .reserva {
    inline-size: 60%;
  }
  .contenAero {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .aero1 {
    display: flex;
    gap: 4rem;
  }
  .aero2 {
    display: flex;
    gap: 4rem;
  }
`;

function Vuelo() {
  return (
    <VueloStyled>
      <div className="superiorBarra">
        <div className="reservaConten">
          <div className="reserva">
            <h2>RESERVA TU VUELO YA.</h2>
            <h3>
              sale más economico comprarlo con tiempo que hacerlo sobre la fecha
              del viaje.
            </h3>
          </div>
          <AirplaneBogColIcon />
        </div>
        <h4>
          Fecha sugerida: <span>16/06/2023</span> - <span>19/06/2023</span>
        </h4>
        <h5>Estas son algunas de las aerolineas que te recomendamos:</h5>
      </div>
      <div className="contenAero">
        <div className="aero1">
          <AviancaLogo />
          <AeromexicoLogo />
        </div>
        <div className="aero2">
          <LatamLogo />
          <ArgentineArilinesLogo />
        </div>
      </div>
    </VueloStyled>
  );
}

export default Vuelo;
