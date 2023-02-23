import styled from "styled-components";

const TarjetaStyled = styled.div`
  inline-size: 100%;
  block-size: 12.5rem;
  position: relative;
  display: flex;

  .tarj {
    block-size: 100%;
    inline-size: 100%;
    z-index: -1;
    border-radius: 1.3rem;
    margin-inline-start: 0.92rem;
    overflow: hidden;
  }
  .icono {
    margin: auto;

    position: absolute;
    inset-block-start: 21%;
  }
`;

function Tarjeta({ icon, comp }) {
  return (
    <TarjetaStyled>
      <div className="icono">{icon}</div>
      <div className="tarj">{comp}</div>
    </TarjetaStyled>
  );
}

export default Tarjeta;
