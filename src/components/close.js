import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";
import CloseSquareSvgrepoCom from "./icons/close-square-svgrepo-com";

const CloseStyled = styled.div``;

function Close() {
  // { setModal }
  const { setModal } = useContext(ModalContext);
  return (
    <CloseStyled onClick={() => setModal(false)} id="close">
      <CloseSquareSvgrepoCom />
    </CloseStyled>
  );
}

export default Close;
