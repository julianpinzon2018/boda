import styled from "styled-components";
import GiftIcon from "./icons/gift_icon";

const TableOfGiftsStyled = styled.div``;

function TableOfGifts() {
  return (
    <TableOfGiftsStyled className="container-component" id="gifts">
      <div className="container-gifts">
        <h2>MESA DE REGALOS</h2>
        <GiftIcon />
      </div>
      <h3>
        No queremos complicarte buscando regalos, por eso habilitaremos una mesa
        para lluvia de sobres o transferencia bancaria destinada a la luna de
        miel.
      </h3>
    </TableOfGiftsStyled>
  );
}

export default TableOfGifts;
