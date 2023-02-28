import styled from "styled-components";
import PlaySquareSvgrepoCom from "./icons/play-square-svgrepo-com";

const PlayStyled = styled.div``;

function Play({ setModal }) {
  return (
    <PlayStyled onClick={() => setModal(true)} id="play">
      <PlaySquareSvgrepoCom />
    </PlayStyled>
  );
}

export default Play;
