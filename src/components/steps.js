import styled from "styled-components";

import Flight from "./flight";
import Lodging from "./lodging";
import Transport from "./transport";
import Suitcase from "./suitcase";
import BadgeWelcomeToColombia from "./icons/badge_welcome_to_colombia";

import rings from "./images/rings_bigger.png";

const StepsStyled = styled.div``;

function Steps() {
  return (
    <StepsStyled className="container-component" id="steps">
      <div className="container-logos-rings">
        <div>
          <img src={rings} alt="" />
          <BadgeWelcomeToColombia />
        </div>
        <h4>
          ¡Este viaje será increíble!
          <br />
          Prepárate para vivir esta historia
        </h4>
      </div>
      <Flight />
      <Suitcase />
      <Lodging />
      <Transport />
    </StepsStyled>
  );
}

export default Steps;
