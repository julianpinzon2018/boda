import styled from "styled-components";
import LuggageIcon from "./icons/luggage_icon";
import WomanDressIcon from "./icons/woman_dress_icon";
import ManJacketIcon from "./icons/man_jacket_icon";
import NumberTwoIcon from "./icons/number_two_icon";

const MaletaStyled = styled.div``;

function Maleta() {
  return (
    <MaletaStyled className="containerTarjetaPasos" id="maleta">
      <div className="icono">
        <NumberTwoIcon />
      </div>
      <div className="superiorBarra">
        <div className="containerTitleLogo">
          <div>
            <div>
              <h1>HAZ TUS MALETAS</h1>
              <p>y hagamos esto juntos</p>
            </div>
          </div>
          <LuggageIcon />
        </div>
        <div className="containerInferiorLogo">
          <p>
            Villavicencio es una ciudad cálida <span>(27° C)</span>, por eso es
            recomendable usar ropa fresca y cómoda
          </p>
          <h2 id="outfit">Alista tu outfit</h2>
        </div>
      </div>
      <div className="ropaConteiner">
        <div className="iconoPerson">
          <WomanDressIcon />
        </div>
        <div className="containerPerson">
          <p className="ropa">
            <span className="person"></span>Vestido largo de color pastel,
            evitar color blanco o similares
          </p>
        </div>
        <div className="iconoPerson">
          <ManJacketIcon />
        </div>
        <div className="containerPerson">
          <p className="ropa">
            <span className="person"></span>Guayabera blanca o de colores pastel
          </p>
        </div>
      </div>
    </MaletaStyled>
  );
}

export default Maleta;
