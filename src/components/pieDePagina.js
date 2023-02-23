import styled from "styled-components";
import TextLetsDoTogetherVector from "./icons/text_lets_do_together_vector";
import DesignedByDario from "./icons/designed_by_dario.png";

const PieDePaginaStyled = styled.div`
  inline-size: 100;
  margin: auto;
  margin-block: 0.5rem;
  .darioLogo {
    padding-block: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .darioFoto {
    width: 35%;
    height: auto;
  }
  .juntosFirma {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

function PieDePagina() {
  return (
    <PieDePaginaStyled>
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
