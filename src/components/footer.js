import styled from "styled-components";
import TextLetsDoTogetherVector from "./icons/text_lets_do_together_vector";
import DesignedByDario from "./icons/designed_by_dario.png";
import Networks from "./networks";

const FooterStyled = styled.div``;

function Footer() {
  return (
    <FooterStyled className="container-component" id="footer">
      <Networks />
      <div className="together-sign">
        <TextLetsDoTogetherVector />
      </div>
      <div className="dario-logo">
        <img className="dario-photo" src={DesignedByDario} alt="" />
      </div>
    </FooterStyled>
  );
}

export default Footer;
