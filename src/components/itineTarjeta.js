import styled from "styled-components";
import WebdingScheduleIcon from "./icons/webding_schedule_icon";
import WebdingFlowersIcon from "./icons/webding_flowers_icon";
import WebdingRingsIcon from "./icons/webding_rings_icon";

const ItineTarjetaStyled = styled.div`
  background-color: var(--box3);

  display: flex;
  flex-direction: column;
  padding-block: 1rem;
  padding-inline: 1.5rem;

  color: var(--oscuro);
  * {
    margin: 0;
  }
  .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 5px;
    block-size: 100%;
    justify-content: space-between;
  }

  h2 {
    font: var(--cinco);
    font-size: 1.6rem;
    line-height: 1.2rem;
  }
  .subItenerario {
    font: var(--seis);
    font-size: 1.2rem;
  }
  h3 {
    font: var(--seis);
    line-height: 1.3rem;
    color: var(--amarillo);
    font-size: 1.2rem;
    margin-block: 1.2rem;
  }
  h4 {
    font: var(--cinco);
    font-size: 1.4rem;
  }

  h5 {
    font: var(--ocho);
    line-height: 0.8rem;
    font-size: 1.2rem;
    color: var(--amarillo);
    margin-block: 0.5rem;
  }
  .styleFech {
    font: var(--seis);
    font-size: 1.2rem;
  }
  h6 {
    font: var(--seis);
    font-size: 1.1rem;

    line-height: 1.2rem;
  }
  .containerItine {
    display: flex;
    block-size: 100%;
    flex-direction: column;
    justify-content: space-between;
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
    padding-block: 1.2rem;
    margin-block-start: 1.2rem;
    margin-block-end: 0.7rem;
    border-block: 2px solid var(--background);
  }

  .m {
    margin-top: 0.4rem;
  }

  .evento {
    text-align: center;
    margin-top: 0.2rem;
  }
  .horario {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function ItineTarjeta() {
  return (
    <ItineTarjetaStyled>
      <div className="superiorBarra">
        <div className="reserva">
          <h2>
            LO QUE VAMOS A HACER
            <br />
            <span className="subItenerario">en Villavicencio</span>
          </h2>
          <h3>Este es el itinerario que preparamos para ti:</h3>
        </div>
        <div>
          <div className="containerItine ">
            <div className="seccionItinerario n">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="prevoda">
                <div className="horario">
                  <h4>EVENTO PREBODA</h4>
                  <h5>
                    Viernes <span className="styleFech">16/06/2023</span>
                  </h5>
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
                <div className="horario">
                  <h4>EL DÍA DE LA BODA</h4>
                  <h5>
                    Sábado <span className="styleFech">17/06/2023</span>
                  </h5>
                  <h6>
                    Hacienda El Campanario en el municipio de Restrepo, a 13 km
                    de Villavicencio. Salida desde el hotel en Chiva Rumbera
                  </h6>
                </div>
              </div>
            </div>

            <div className="seccionItinerario m">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="horario">
                <h4>EVENTO POSTBODA</h4>
                <h5>
                  Domingo <span className="styleFech">18/06/2023</span>
                </h5>
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
