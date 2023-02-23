import styled from "styled-components";
import VillavoIlustrationCity from "./icons/villavo_ilustration_city";
import VillavoFolkloreIcon from "./icons/villavo_folklore_icon";
import VillavoLandscapeIcon from "./icons/villavo_landscape_icon";
import VillavoLocationIcon from "./icons/villavo_location_icon";
import VillavoPopulationIcon from "./icons/villavo_population_icon";
import VillavoWeatherIcon from "./icons/villavo_weather_icon";
import WebdingGastronomyIcon from "./icons/webding_gastronomy_icon";

const ConoceVillavicencioStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  inline-size: 95%;
  margin-top: 1.5rem;
  box-sizing: border-box;
  padding-inline: 1rem;

  * {
    margin: 0;
  }
  .logoVillavo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .titleVillavo {
    text-align: center;
  }
  h2 {
    font: var(--cinco);
    font-size: 1.3rem;
    color: var(--oscuro);
  }
  h3 {
    font: var(--seis);
    line-height: 0.8rem;
    color: var(--amarillo);
  }
  .villavoGrid {
    margin-top: 1rem;

    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    grid-template-rows: auto auto auto;

    column-gap: 0.1rem;
    row-gap: 2rem;

    color: var(--oscuro);
  }
  p {
    font: var(--seis);
    line-height: 0.85rem;
    overflow: hidden;
  }
  .iconoVillavo {
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
  }
  .textMargin {
    margin-inline-end: 1rem;
  }
  h4 {
    margin-top: 1rem;
    text-align: center;
    font: var(--cinco);
    color: var(--amarillo);
  }
`;

function ConoceVillavicencio() {
  return (
    <ConoceVillavicencioStyled>
      <div className="logoVillavo">
        <div className="titleVillavo">
          <h2>CONOCE ALGO DE VILLAVICENCIO</h2>
          <h3>De antemano sabemos que te va a encantar</h3>
        </div>
        <VillavoIlustrationCity />
      </div>
      <div className="villavoGrid">
        <div className="iconoVillavo">
          <VillavoLocationIcon />
        </div>
        <div className="textMargin">
          <p>A sólo 86 Km. de Bogotá, es conocida como la puerta al Llano</p>
        </div>

        <div className="iconoVillavo">
          <VillavoWeatherIcon />
        </div>

        <p>Tiene una población de 550.000 habitantes</p>

        <div className="iconoVillavo">
          <VillavoPopulationIcon />
        </div>
        <div className="textMargin">
          <p>
            La gastronomía se basa en las carnes, pescados, sopas y amasijos
          </p>
        </div>

        <div className="iconoVillavo">
          <VillavoLandscapeIcon />
        </div>
        <p>Su temperatura promedio es de 27° C, con un clima húmedo</p>

        <div className="iconoVillavo">
          <WebdingGastronomyIcon />
        </div>
        <div className="textMargin">
          <p>El paisaje es de piedemonte y sabana, con ríos</p>
        </div>

        <div className="iconoVillavo">
          <VillavoFolkloreIcon />
        </div>
        <p>
          La musica típica es el joropo, emparentada con el jarabe tapatío de
          México
        </p>
      </div>

      <h4>LA RUMBA DE VILLAVICENCIO ES BUENISIMA...</h4>
    </ConoceVillavicencioStyled>
  );
}

export default ConoceVillavicencio;
