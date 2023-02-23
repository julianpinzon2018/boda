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
  padding-inline: 1.5rem;
  padding-block: 1rem;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 0.5rem;

  color: var(--oscuro);
  * {
    margin: 0;
  }
  .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    justify-content: space-between;
    border-bottom: 2px solid var(--background);
  }

  h2 {
    font: var(--cinco);
    font-size: 1.4rem;
    line-height: 1rem;
  }
  h3 {
    font: var(--seis);
    line-height: 1rem;
    font-size: 1.1rem;
    margin-block-end: 0.3rem;
  }
  h4 {
    font: var(--seis);
    font-size: 1rem;
    line-height: 1.2rem;
  }
  h5 {
    font: var(--seis);
    margin-block-start: 1.2rem;
    font-style: italic;
    font-size: 1rem;
  }
  .fechasVuelos {
    padding-block: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .reservaConten {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .reserva {
    inline-size: 70%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .contenAero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
  }
  .aero1 {
    display: flex;
    gap: 4rem;
  }
  .aero2 {
    display: flex;
    gap: 4rem;
  }
  .styleDecha {
    font-size: 1rem;
  }
`;

function Vuelo() {
  return (
    <VueloStyled>
      <div className="superiorBarra">
        <div className="reservaConten">
          <div className="reserva">
            <h2>RESERVA TU VUELO YA.</h2>
          </div>
          <AirplaneBogColIcon />
        </div>
        <div className="fechasVuelos">
          <h3>
            Sale más economico comprarlo con tiempo que hacerlo sobre la fecha
            del viaje.
          </h3>
          <h4>
            Fecha sugerida
            <br />
            <span className="styleDecha"> 16/06/2023 - 19/06/2023</span>
          </h4>
          <h5>Aerolineas que te recomendamos:</h5>
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
