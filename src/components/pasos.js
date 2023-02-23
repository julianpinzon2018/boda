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

const PasosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding-inline: 0.5rem;
  margin: auto;
  inline-size: 85%;
`;

function Pasos() {
  return (
    <PasosStyled>
      <Tarjeta comp={<Vuelo />} icon={<NumberOneIcon />} />
      <Tarjeta comp={<Maleta />} icon={<NumberTwoIcon />} />
      <Tarjeta comp={<Hospedaje />} icon={<NumberThreeIcon />} />
      <Tarjeta comp={<Transporte />} icon={<NumberFourIcon />} />
    </PasosStyled>
  );
}

export default Pasos;
