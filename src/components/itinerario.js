import styled from "styled-components";
import imgBackgFotter from "./images/vintage_footer_background_image.png";
import MesaDeRegalos from "./mesaDeRegalos";
import PieDePagina from "./pieDePagina";
import ItineTarjeta from "./itineTarjeta";
import Redes from "./redes";

const ItinerarioStyled = styled.div`
  position: relative;
  * {
    margin: 0;
  }
  .imgBackgFotter {
    position: absolute;

    inline-size: 100%;
    block-size: 100%;
    z-index: -1;
    inset-block-end: 0;
  }
  .containerItinerario {
    padding-inline: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding-inline: 0.5rem;
    margin: auto;
    margin-top: 0.8rem;
    inline-size: 85%;
    justify-content: space-between;
  }
  .itinerario {
    inline-size: 100%;
    block-size: 14.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .itinerarioTarjeta {
    block-size: 100%;
    inline-size: 100%;
    border-radius: 1.3rem;
    margin-inline-start: 0.92rem;
    overflow: hidden;
  }
  .containerTarijetaItinerario {
    inline-size: 100%;
    block-size: 14.5rem;
    position: relative;
    display: flex;
  }
  .containerRedes {
    border: 1px solid red;
  }
  .regalos {
    margin-inline: 10%;
    margin-block-start: 0.9rem;
  }
  .redes {
    margin-inline: 1rem;
  }
  .dario {
    margin: auto;
    margin-bottom: 0.5rem !important;
  }
`;

function Itinerario() {
  return (
    <ItinerarioStyled>
      <img className="imgBackgFotter" src={imgBackgFotter} alt="" />
      <div className="containerItinerario">
        <div className="itinerario">
          <div className="containerTarijetaItinerario">
            <div className="itinerarioTarjeta">
              <ItineTarjeta />
            </div>
          </div>
        </div>
        <div className="regalos">
          <MesaDeRegalos />
        </div>
        <div className="redes">
          <Redes />
        </div>
        <div className="dario">
          <PieDePagina />
        </div>
      </div>
    </ItinerarioStyled>
  );
}

export default Itinerario;
