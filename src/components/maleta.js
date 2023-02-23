import styled from "styled-components";
import LuggageIcon from "./icons/luggage_icon";
import WomanDressIcon from "./icons/woman_dress_icon";
import ManJacketIcon from "./icons/man_jacket_icon";

const MaletaStyled = styled.div`
  background-color: var(--box2);
  block-size: 100%;
  display: flex;
  flex-direction: column;
  padding-inline: 1.8rem;
  padding-block: 1rem;
  box-sizing: border-box;
  justify-content: space-between;

  * {
    margin: 0;
    color: var(--oscuro);
  }
  .maletaContainerLogo {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }
  .maletaContainer {
    border-bottom: 2px solid var(--background);
    padding-bottom: 0.7rem;
  }
  h2 {
    font: var(--cinco);
  }
  h3 {
    font: var(--seis);
    line-height: 0.8rem;
    font-size: 0.7rem;
  }
  h4 {
    font: var(--seis);
    color: var(--amarillo);
  }
  h5 {
    font: var(--seis);
    line-height: 0.8rem;
    font-size: 0.7rem;
  }
  .ropaConteiner {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 0.3rem;
  }
  .iconoPerson {
    text-align: center;
  }
  .ropa {
    font: var(--tres);
    font-size: 0.7rem;
  }
  .person {
    font: var(--seis);
  }
  .containerPerson {
    display: flex;
    align-items: center;
  }
  .maletaContainerTitle {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

function Maleta() {
  return (
    <MaletaStyled>
      <div className="maletaContainer">
        <div className="maletaContainerLogo">
          <div className="maletaContainerTitle">
            <div>
              <h2>HAZ TUS MALETAS</h2>
              <h3>y hagamos esto juntos</h3>
            </div>
            <h4>Alista tu oufit</h4>
          </div>
          <LuggageIcon />
        </div>
        <h5>
          Villavicencio es una ciudad cálida <span>(27° C)</span>, por eso es
          recomendable usar ropa fresca y cómoda
        </h5>
      </div>
      <div className="ropaConteiner">
        <div className="iconoPerson">
          <WomanDressIcon />
        </div>
        <div className="containerPerson">
          <p className="ropa">
            <span className="person">mujeres &nbsp;</span> evitar color blanco
          </p>
        </div>
        <div className="iconoPerson">
          <ManJacketIcon />
        </div>

        <div className="containerPerson">
          <p className="ropa">
            <span className="person">hombres &nbsp;</span> evitar color rosa
          </p>
        </div>
      </div>
    </MaletaStyled>
  );
}

export default Maleta;
