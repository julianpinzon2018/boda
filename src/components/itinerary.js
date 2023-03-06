import styled from "styled-components";
import WebdingScheduleIcon from "./icons/webding_schedule_icon";
import WebdingFlowersIcon from "./icons/webding_flowers_icon";
import WebdingRingsIcon from "./icons/webding_rings_icon";
import LocationPointSvgrepoCom from "./icons/location-point-svgrepo-com";

const ItineraryStyled = styled.div``;

function Itinerary() {
  return (
    <ItineraryStyled className="container-component" id="itinerary">
      <div className="top-bar">
        <div className="reserva">
          <h1>
            LO QUE VAMOS A HACER
            <br />
            <span className="sub-itinerary">en Villavicencio</span>
          </h1>
          <h2>Este es el itinerario que preparamos para ti:</h2>
        </div>
        <div>
          <div className="container-itine ">
            <div className="section-itinerary n">
              <div className="event">
                <WebdingScheduleIcon />
              </div>
              <div className="pre-wedding">
                <div className="schedule">
                  <h3>EVENTO PREBODA</h3>
                  <p className="date-event">
                    Viernes <span className="style-fech">16/06/2023</span>
                  </p>
                  <p className="description-event">
                    Cena en &#127828;&nbsp;
                    <a
                      className="place-link"
                      href="https://vm.tiktok.com/ZMYDEVDSd"
                      target="bank"
                    >
                      Restaurante Campestre Ave María
                    </a>
                  </p>
                </div>
                <WebdingFlowersIcon />
              </div>
            </div>
            <div className="day">
              <div className="section-itinerary">
                <div className="event">
                  <WebdingRingsIcon />
                </div>
                <div className="schedule">
                  <h3>EL DÍA DE LA BODA</h3>
                  <p className="date-event">
                    Sábado <span className="style-fech">17/06/2023</span>
                  </p>
                  <p className="description-event">
                    <a
                      className="place-link"
                      href="https://goo.gl/maps/AFxEPMsiB7YGqxh77"
                      target="_bank"
                    >
                      <LocationPointSvgrepoCom />
                      Hacienda El Campanario
                    </a>
                    &nbsp; en el municipio de Restrepo, a 13 km de
                    Villavicencio. Salida desde el hotel en Chiva Rumbera
                  </p>
                </div>
              </div>
            </div>

            <div className="section-itinerary m">
              <div className="event">
                <WebdingScheduleIcon />
              </div>
              <div className="schedule">
                <h3>EVENTO POSTBODA</h3>
                <p className="date-event">
                  Domingo <span className="style-fech">18/06/2023</span>
                </p>
                <p className="description-event">Sol, cerveza y piscina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItineraryStyled>
  );
}

export default Itinerary;
