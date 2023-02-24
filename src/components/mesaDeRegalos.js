import styled from "styled-components";
import GiftIcon from "./icons/gift_icon";

const MesaDeRegalosStyled = styled.div``;

function MesaDeRegalos() {
  return (
    <MesaDeRegalosStyled className="containerComponent" id="regalos">
      <div className="containerRegalos">
        <h2>MESA DE REGALOS</h2>
        <GiftIcon />
      </div>
      <h3>
        No queremos complicarte buscando regalos, por eso habilitaremos una mesa
        para lluvia de sobres o transferencia bancaria destinada a la luna de
        miel.
      </h3>
    </MesaDeRegalosStyled>
  );
}

export default MesaDeRegalos;
