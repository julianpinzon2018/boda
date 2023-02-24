import styled from "styled-components";
import TextLetsDoTogetherVector from "./icons/text_lets_do_together_vector";
import DesignedByDario from "./icons/designed_by_dario.png";
import Redes from "./redes";

const PieDePaginaStyled = styled.div``;

function PieDePagina() {
  return (
    <PieDePaginaStyled className="containerComponent" id="pieDePagina">
      <Redes />
      <div className="juntosFirma">
        <TextLetsDoTogetherVector />
      </div>
      <div className="darioLogo">
        <img className="darioFoto" src={DesignedByDario} alt="" />
      </div>
    </PieDePaginaStyled>
  );
}

export default PieDePagina;
