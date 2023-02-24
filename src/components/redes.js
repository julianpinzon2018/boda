import styled from "styled-components";
import InstagramLogo from "./icons/instagram_logo";

const RedesStyled = styled.div``;

function Redes() {
  return (
    <RedesStyled id="redes">
      <div className="instagram">
        <InstagramLogo />
      </div>
      <p className="redess">
        Será un honor que nos etiquetes en cada story de la boda.
        <br />
        @andrestntx @fera_mendez
      </p>
    </RedesStyled>
  );
}

export default Redes;
