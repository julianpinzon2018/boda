import styled from "styled-components";
import PlaySquareSvgrepoCom from "./icons/play-square-svgrepo-com";

const PlayStyled = styled.div`
  text-align: center;
`;

function Play() {
  return (
    <PlayStyled>
      <PlaySquareSvgrepoCom />
    </PlayStyled>
  );
}

export default Play;
