import styled from "styled-components";
import InstagramLogo from "./icons/instagram_logo";

const NetworksStyled = styled.div``;

function Networks() {
  return (
    <NetworksStyled id="networks">
      <div className="instagram">
        <InstagramLogo />
      </div>
      <p className="networkss">
        Será un honor que nos etiquetes en cada story de la boda.
        <br />
        @andrestntx @fera_mendez
      </p>
    </NetworksStyled>
  );
}

export default Networks;
