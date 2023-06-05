import styled from "styled-components";
import WebdingScheduleIcon from "./icons/webding_schedule_icon";
import WebdingFlowersIcon from "./icons/webding_flowers_icon";
import WebdingRingsIcon from "./icons/webding_rings_icon";
import LocationPointSvgrepoCom from "./icons/location-point-svgrepo-com";
import oasisPhoto from "./images/oasis_bar.jpeg";
import postBodaPhoto from "./images/post_boda.jpeg";
import ghlHotelPhoto from "./images/hotel_ghl.png";

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
                    Viernes 16 Jun, <span className="style-fech">5:00PM</span>
                  </p>
                  <p className="description-event">
                    Cena &#127828; y chelas &#127866; en&nbsp;
                    <a
                      className="place-link"
                      href="https://l.instagram.com/?u=https%3A%2F%2Fmaps.google.com%2F%3Fq%3D4.102932%252C-73.652740&e=AT3tCBmTwTLW1fhImUzkV_EnLgwbakCZHjGj80POQoK6MYGo9CxrYf3M6fVMSR4aOaUbEVmrVGs7nLN2MxVwv5Bn0jCmuiiK_MjunYkr4kqe_ov8H0C2"
                      target="bank"
                    ><LocationPointSvgrepoCom />Restaurante Bar Oasis
                    </a>
                  </p>
                  <div className="description-event event-detail">
                    <img src={oasisPhoto} alt="Oasis bar"/>
                    <p> La preboda será nuestro primer encuentro con un ambiente chill, así que
                      <b> no te preocupes por el dress-code</b> y vistete como te sientas más cómoda.</p>
                    <p>Ven en mood de jugar, cantar, disfrutar y tomarte unos buenos drinks.</p>
                    <p>Al llegar tendrás un trago de cortesía y algunos pasabocas. Luego podrás comprar la cerveza,
                      licor o alimentos que más te gusten de la carta.</p>
                  </div>
                </div>
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
                    Sábado 17 Jun, <span className="style-fech">3:30PM</span>
                  </p>
                  <p className="description-event">
                    Salida desde el
                    <a
                        className="place-link"
                        href="https://goo.gl/maps/AFxEPMsiB7YGqxh77"
                        target="_bank"
                    >
                      <LocationPointSvgrepoCom />
                      Hotel ghl
                    </a>
                    &nbsp; en chiva rumbera a las <b>3:30pm</b>.
                  </p>
                  <div className="description-event event-detail">
                    <img src={ghlHotelPhoto} alt=""/>
                    <p>El punto de encuentro será el Lobby del Hotel GHL, el cual se encuentra atrás del Centro
                      Comercial Llanocentro.</p>
                    <p>Todos saldremos juntos a la <a
                        className="place-link"
                        href="https://goo.gl/maps/AFxEPMsiB7YGqxh77"
                        target="_bank"
                    >
                      <LocationPointSvgrepoCom />
                      Hacienda El Campanario
                    </a>, por lo cual es muy importante que seas puntual. La hacienda se encuentra en el municipio de
                      Restrepo, a 13 km de Villavicencio.</p>
                  </div>
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
                  Domingo 18 Jun, <span className="style-fech">12:30 PM</span>
                </p>
                <p className="description-event">Sol, cerveza y piscina en&nbsp;
                  <a
                      className="place-link"
                      href="https://goo.gl/maps/D18v7WKQJgMGGJJ98?coh=178572&entry=tt"
                      target="bank"
                  ><LocationPointSvgrepoCom /> Finca Villa Luna
                  </a></p>
                <div className="description-event event-detail">
                  <img src={postBodaPhoto} alt=""/>
                  <p>Nos juntaremos para pasar el guayabo (cruda) con sol, asado y piscina (alberca).
                    Trae chelas y botanas para compartir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ItineraryStyled>
  );
}

export default Itinerary;
