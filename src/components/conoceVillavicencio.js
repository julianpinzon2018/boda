import styled from "styled-components";
import VillavoIlustrationCity from "./icons/villavo_ilustration_city";
import VillavoFolkloreIcon from "./icons/villavo_folklore_icon";
import VillavoLandscapeIcon from "./icons/villavo_landscape_icon";
import VillavoLocationIcon from "./icons/villavo_location_icon";
import VillavoPopulationIcon from "./icons/villavo_population_icon";
import VillavoWeatherIcon from "./icons/villavo_weather_icon";
import WebdingGastronomyIcon from "./icons/webding_gastronomy_icon";

const ConoceVillavicencioStyled = styled.div``;

function ConoceVillavicencio() {
  return (
    <ConoceVillavicencioStyled
      className="containerComponent"
      id="villavicencio"
    >
      <div className="logoVillavo">
        <div className="titleVillavo">
          <h1>CONOCE ALGO DE VILLAVICENCIO</h1>
          <p>Sabemos que te va a encantar</p>
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
        <p>Su temperatura promedio es de 27° C, con un clima húmedo</p>

        <div className="iconoVillavo">
          <VillavoPopulationIcon />
        </div>
        <div className="textMargin">
          <p>Tiene una población de 550.000 habitantes</p>
        </div>

        <div className="iconoVillavo">
          <VillavoLandscapeIcon />
        </div>
        <p>El paisaje es de piedemonte y sabana, con ríos</p>

        <div className="iconoVillavo">
          <WebdingGastronomyIcon />
        </div>
        <div className="textMargin">
          <p>
            La gastronomía se basa en las carnes, pescados, sopas y amasijos
          </p>
        </div>

        <div className="iconoVillavo">
          <VillavoFolkloreIcon />
        </div>
        <p>
          La musica típica es el joropo, emparentada con el jarabe tapatío de
          México
        </p>
      </div>

      <h2>LA RUMBA ES BUENISIMA...</h2>
    </ConoceVillavicencioStyled>
  );
}

export default ConoceVillavicencio;
