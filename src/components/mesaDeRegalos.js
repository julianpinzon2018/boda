import styled from "styled-components";
import GiftIcon from "./icons/gift_icon";

const MesaDeRegalosStyled = styled.div`
  * {
    margin: 0;
    color: var(--oscuro);
  }
  .containerRegalos {
    display: flex;
    margin: auto;
    gap: 1.5rem;
  }
  h2 {
    font: var(--cinco);
    font-size: 1.4rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    color: var(--casar);
    font: var(--seis);
    font-size: 1.1rem;
    line-height: 1.2rem;
  }
`;

function MesaDeRegalos() {
  return (
    <MesaDeRegalosStyled>
      <div className="containerRegalos">
        <div>
          <h2>MESA DE REGALOS</h2>
          <h3>
            No queremos complicarte buscando o cargando regalos, por eso
            habilitaremos una mesa para lluvia de sobres o transferencia
            bancaria destinada a la luna de miel.
          </h3>
        </div>
        <GiftIcon />
      </div>
    </MesaDeRegalosStyled>
  );
}

export default MesaDeRegalos;
