import styled from "styled-components";
import InstagramLogo from "./icons/instagram_logo";

const RedesStyled = styled.div`
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.3rem 1rem;
  background-color: var(--background);
  margin-top: 0.5rem;
  box-shadow: 2px 2px 5px rgba(000, 000, 000, 0.5);

  .redes {
    font: var(--siete);

    color: var(--oscuro);
    margin: 0;
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
      <p className="redes">
        Será un honor que nos etiquetes en cada story de la boda.
        <br />
        @andrestntx @fera_mendez
      </p>
    </RedesStyled>
  );
}

export default Redes;
