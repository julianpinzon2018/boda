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
  padding-inline: 2rem;
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
    /* border-bottom: 2px solid var(--background); */
  }

  h2 {
    font: var(--cinco);
  }
  h3 {
    font: var(--siete);
    line-height: 0.8rem;
  }
  h4 {
    font: var(--siete);
    line-height: 0.8rem;
  }
  h5 {
    font: var(--siete);
    line-height: 0.8rem;
  }
  .fechasVuelos {
    padding-block: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .reservaConten {
    display: flex;
    gap: 0.8rem;
    justify-content: space-between;
  }
  .reserva {
    inline-size: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .contenAero {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    justify-content: space-between;
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
        <div className="fechasVuelos">
          <h4>Fecha sugerida: 16/06/2023 - 19/06/2023 </h4>
          <h5>Estas son algunas de las aerolineas que te recomendamos:</h5>
        </div>
      </div>
      <hr />
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
