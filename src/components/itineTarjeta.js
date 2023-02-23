import styled from "styled-components";
import WebdingScheduleIcon from "./icons/webding_schedule_icon";
import WebdingFlowersIcon from "./icons/webding_flowers_icon";
import WebdingRingsIcon from "./icons/webding_rings_icon";

const ItineTarjetaStyled = styled.div`
  background-color: var(--box3);
  block-size: 100%;

  display: flex;
  flex-direction: column;
  padding-block: 0.8rem;
  padding-inline-start: 3rem;
  padding-inline-end: 1.8rem;
  box-sizing: border-box;

  color: var(--oscuro);
  * {
    margin: 0;
  }
  .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 5px;
  }

  h2 {
    font: var(--cinco);
  }
  h3 {
    font: var(--seis);
    font-size: 0.65rem;
    color: var(--amarillo);
  }
  h4 {
    font: var(--cinco);
    font-size: 0.7rem;
  }
  h5 {
    font: var(--siete);
    color: var(--amarillo);
    margin-block: 1px;
  }
  h6 {
    font: var(--siete);
  }
  .containerItine {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  .seccionItinerario {
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 0.5rem;
  }
  .prevoda {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .dia {
    padding-block: 0.4rem;
    border-block: 2px solid var(--background);
  }

  .m {
    margin-top: 0.4rem;
  }
  .evento {
    text-align: center;
    margin-top: 0.2rem;
  }
`;

function ItineTarjeta() {
  return (
    <ItineTarjetaStyled>
      <div className="superiorBarra">
        <div className="reserva">
          <h2>LO QUE VAMOS A HACER EN VILLAVICENCIO</h2>
          <h3>Este es el itinerario que preparamos para ti:</h3>
        </div>
        <div>
          <div className="containerItine ">
            <div className="seccionItinerario n">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="prevoda">
                <div>
                  <h4>EVENTO PREBODA</h4>
                  <h5>Viernes 16/06/2023</h5>
                  <h6>Cena en Restaurante Campestre Ave María</h6>
                </div>
                <WebdingFlowersIcon />
              </div>
            </div>
            <div className="dia">
              <div className="seccionItinerario">
                <div className="evento">
                  <WebdingRingsIcon />
                </div>
                <div className="">
                  <h4>EL DÍA DE LA BODA</h4>
                  <h5>Sábado 17/06/2023</h5>
                  <h6>
                    Hacienda típica en el municipio de Restrepo, a 13 km de
                    Villavicencio. Salida desde el hotel ghl en Chiva Rumbera
                    (bus escalera)
                  </h6>
                </div>
              </div>
            </div>

            <div className="seccionItinerario m">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="">
                <h4>EVENTO POSTBODA</h4>
                <h5>Domingo 18/06/2023</h5>
                <h6>Sol, cerveza y piscina</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItineTarjetaStyled>
  );
}

export default ItineTarjeta;
