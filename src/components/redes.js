import styled from "styled-components";
import InstagramLogo from "./icons/instagram_logo";

const RedesStyled = styled.div`
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.7rem;
  background-color: var(--background);
  margin-top: 0.5rem;
  box-shadow: 2px 2px 5px rgba(000, 000, 000, 0.5);

  .redess {
    font: var(--siete);
    font-size: 1rem;

    color: var(--oscuro);
  }
  .instagram {
    transform: translateY(10%);
  }
`;

function Redes() {
  return (
    <RedesStyled>
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
