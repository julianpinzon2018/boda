import styled from "styled-components";
import GiftIcon from "./icons/gift_icon";
import Bancolombia from "./images/img-bancolombia.jpg";
import Davivienda from "./images/img-davivienda.jpg";

const TableOfGiftsStyled = styled.div`
  .section-bancos {
    display: flex;
    gap: 2rem;
    margin-block-start: 3rem;
    inline-size: 100%;
    justify-content: space-between;

    .bancos {
      block-size: 15rem;
      inline-size: auto;
    }

    .section-bancos__pais {
      display: flex;
      flex-direction: column;

      h2 {
        padding-block-end: 1rem;
      }
      p {
        margin-block-end: 0.5rem;
      }
      .davivienda {
        margin-block-end: 2rem;
      }
    }
  }
  @media screen and (min-width: 700px) {
    .section-bancos__pais {
      align-items: center;
    }
  }

  @media screen and (max-width: 700px) {
    .section-bancos {
      flex-direction: column;
      justify-content: space-between;

      .bancos {
        inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;

function TableOfGifts() {
  return (
    <TableOfGiftsStyled className="container-component" id="gifts" name="gifts">
      <div className="container-gifts">
        <h2>MESA DE REGALOS</h2>
        <GiftIcon />
      </div>
      <h3>
        No queremos complicarte buscando regalos, por eso habilitaremos una mesa
        para lluvia de sobres o transferencia bancaria destinada a la luna de
        miel.
      </h3>
      <section className="section-bancos">
        <div className="section-bancos__pais">
          <h2>TRANSFERENCIAS DESDE MEXICO</h2>
          <div>
            <p>
              CLABE:&nbsp;
              <strong>0121 8001 5799 377426</strong>
            </p>
            <p>Banco BBVA Bancomer</p>
            <p>Andres Mauricio Pinzon</p>
          </div>
        </div>
        <div className="section-bancos__pais">
          <h2>TRANSFERENCIAS DESDE COLOMBIA</h2>
          <img
            className="bancos davivienda"
            src={Davivienda}
            alt="QR de Bancolombia"
          />
          <img className="bancos" src={Bancolombia} alt="QR de Davivienda" />
        </div>
      </section>
    </TableOfGiftsStyled>
  );
}

export default TableOfGifts;
