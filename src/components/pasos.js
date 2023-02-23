import styled from "styled-components";
import Tarjeta from "./tarjeta";
import NumberOneIcon from "./icons/number_one_icon";
import NumberTwoIcon from "./icons/number_two_icon";
import NumberThreeIcon from "./icons/number_three_icon";
import NumberFourIcon from "./icons/number_four_icon";
import Vuelo from "./vuelo";
import Hospedaje from "./hospedaje";
import Transporte from "./transporte";
import Maleta from "./maleta";
import BadgeWelcomeToColombia from "./icons/badge_welcome_to_colombia";

import anillos from "./images/wedding_rings_circle.png";

const PasosStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  inline-size: 85%;
  margin-block-start: 1rem;
  .queremos {
    font: var(--seis);
    font-size: 1.2rem;
    color: var(--amarillo);
    margin: 0;
    text-align: center;
    margin-block-end: 0.5rem;
  }
  .footerInvitacion {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .anillo {
    width: auto;
    height: 3.5rem;
  }
`;

function Pasos() {
  return (
    <PasosStyled>
      <div className="footerInvitacion">
        <img className="anillo" src={anillos} alt="" />
        <BadgeWelcomeToColombia />
      </div>
      <h4 className="queremos">
        Queremos que este viaje sea increíble
        <br />
        Preparate para vivir esta historia
      </h4>

      <Tarjeta comp={<Vuelo />} icon={<NumberOneIcon />} />
      <Tarjeta comp={<Maleta />} icon={<NumberTwoIcon />} />
      <Tarjeta comp={<Hospedaje />} icon={<NumberThreeIcon />} />
      <Tarjeta comp={<Transporte />} icon={<NumberFourIcon />} />
    </PasosStyled>
  );
}

export default Pasos;
