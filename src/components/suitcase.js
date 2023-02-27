import styled from "styled-components";
import LuggageIcon from "./icons/luggage_icon";
import WomanDressIcon from "./icons/woman_dress_icon";
import ManJacketIcon from "./icons/man_jacket_icon";
import NumberTwoIcon from "./icons/number_two_icon";

const SuitcaseStyled = styled.div``;

function Suitcase() {
  return (
    <SuitcaseStyled className="container-card-steps" id="suitcase">
      <div className="icon">
        <NumberTwoIcon />
      </div>
      <div className="top-bar">
        <div className="container-title-logo">
          <div>
            <div>
              <h1>HAZ TUS MALETAS</h1>
              <p>y hagamos esto juntos</p>
            </div>
          </div>
          <LuggageIcon />
        </div>
        <div className="container-bottom-logo">
          <p>
            Villavicencio es una ciudad cálida <span>(27° C)</span>, por eso es
            recomendable usar ropa fresca y cómoda
          </p>
          <h2 id="outfit">Alista tu outfit</h2>
        </div>
      </div>
      <div className="clothes-conteiner">
        <div className="icon-person">
          <WomanDressIcon />
        </div>
        <div className="container-person">
          <p className="clothes">
            <span className="person"></span>Vestido largo de color pastel,
            evitar color blanco o similares
          </p>
        </div>
        <div className="icon-person">
          <ManJacketIcon />
        </div>
        <div className="container-person">
          <p className="clothes">
            <span className="person"></span>Guayabera blanca o de colores pastel
          </p>
        </div>
      </div>
    </SuitcaseStyled>
  );
}

export default Suitcase;
