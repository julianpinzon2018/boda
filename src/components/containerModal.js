import styled from "styled-components";
import Overlay from "./overlay";
import Close from "./close";

const ContainerModalStyled = styled.div``;

function ContainerModal() {
  // { setModal }
  return (
    <Overlay>
      <ContainerModalStyled id="container-modal">
        <Close />
        <iframe
          className="video-responsive"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NcbogaCkz5s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </ContainerModalStyled>
    </Overlay>
  );
}

export default ContainerModal;
