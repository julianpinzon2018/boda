import styled from "styled-components";

const OverlayStyled = styled.div``;

function Overlay({ children }) {
  return <OverlayStyled id="overlay">{children}</OverlayStyled>;
}

export default Overlay;
