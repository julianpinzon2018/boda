import styled from "styled-components";
import KnowVillavicencio from "./knowVillavicencio";
import Invitation from "./invitation";
import Itinerary from "./itinerary";
import Steps from "./steps";
import imgBackgFotter from "./images/vintage_footer_background_image.png";
import image from "./images/header_imagess.png";
import TableOfGifts from "./tableOfGifts";
import Footer from "./footer";
import { useState } from "react";
import Modal from "./videoVillavicencio";

const LayoutStyled = styled.main`
  max-inline-size: 100vw;
  overflow-x: hidden !important;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  .image-background {
    position: absolute;
    inset-block-start: 0;
    inline-size: 100%;
    z-index: -1;
  }

  .img-backg-fotter {
    position: absolute;
    inline-size: 100%;
    block-size: auto;
    z-index: -1;
    inset-block-end: 0;
  }
`;

function Layout() {
  const [modal, setModal] = useState(false);
  return (
    <LayoutStyled>
      <Modal modal={modal} setModal={setModal} />
      <img className="image-background" src={image} alt="" />

      <Invitation />
      <Steps />
      <KnowVillavicencio setModal={setModal} />
      <Itinerary />
      <TableOfGifts />
      <Footer />

      <img className="img-backg-fotter" src={imgBackgFotter} alt="" />
    </LayoutStyled>
  );
}

export default Layout;
