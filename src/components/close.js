import styled from "styled-components";
import CloseSquareSvgrepoCom from "./icons/close-square-svgrepo-com";

const CloseStyled = styled.div``;

function Close({ setModal }) {
  return (
    <CloseStyled onClick={() => setModal(false)} id="close">
      <CloseSquareSvgrepoCom />
    </CloseStyled>
  );
}

export default Close;
