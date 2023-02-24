import styled from "styled-components";
import WebdingScheduleIcon from "./icons/webding_schedule_icon";
import WebdingFlowersIcon from "./icons/webding_flowers_icon";
import WebdingRingsIcon from "./icons/webding_rings_icon";

const ItinerarioStyled = styled.div``;

function Itinerario() {
  return (
    <ItinerarioStyled className="containerComponent" id="itinerario">
      <div className="superiorBarra">
        <div className="reserva">
          <h1>
            LO QUE VAMOS A HACER
            <br />
            <span className="subItenerario">en Villavicencio</span>
          </h1>
          <h2>Este es el itinerario que preparamos para ti:</h2>
        </div>
        <div>
          <div className="containerItine ">
            <div className="seccionItinerario n">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="prevoda">
                <div className="horario">
                  <h3>EVENTO PREBODA</h3>
                  <p className="fechaEvento">
                    Viernes <span className="styleFech">16/06/2023</span>
                  </p>
                  <p className="descriptionEvent">
                    Cena en Restaurante Campestre Ave María
                  </p>
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
                  <h3>EL DÍA DE LA BODA</h3>
                  <p className="fechaEvento">
                    Sábado <span className="styleFech">17/06/2023</span>
                  </p>
                  <p className="descriptionEvent">
                    Hacienda El Campanario en el municipio de Restrepo, a 13 km
                    de Villavicencio. Salida desde el hotel en Chiva Rumbera
                  </p>
                </div>
              </div>
            </div>

            <div className="seccionItinerario m">
              <div className="evento">
                <WebdingScheduleIcon />
              </div>
              <div className="horario">
                <h3>EVENTO POSTBODA</h3>
                <p className="fechaEvento">
                  Domingo <span className="styleFech">18/06/2023</span>
                </p>
                <p className="descriptionEvent">Sol, cerveza y piscina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItinerarioStyled>
  );
}

export default Itinerario;
