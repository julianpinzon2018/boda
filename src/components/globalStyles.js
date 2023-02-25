import { createGlobalStyle } from "styled-components";

const GlobalStylesStyled = createGlobalStyle`
:root {
  --background: #f2efea;
  --casar: #9e6a56;
  --barra: #c9ae7e;
  --oscuro: #704e39;
  --amarillo: #CE7F3A;
  --box1: #f1b48c;
  --box2: #eecdb0;
  --box3: #f7dbc3;
  --box4: #fcd3c2;
  --primary:italic 600  1rem Playfair Display ;
  --secondary: 600 2.3rem Playfair Display;
  --tres: 13px Prata;
  --cuatro: 600 5.3px Playfair Display;
  --cinco: 1rem bebas kai;
  --seis:  13.3px bahnschrift;
  --siete: 9.3px bahnschrift;
  --nueve: .5rem bahnschrift;
  --diez: 1.6rem authentic;
}
body {
  margin: 0;
  background: var(--background);
  overflow-y: auto;
  overflow-x: hidden;
}
 h1 {
  margin: 0;
} 
h2 {
  margin: 0;
} 
h3 {
  margin: 0;
} 
h4 {
  margin: 0;
}
h5 {
  margin: 0;
}
h6 {
  margin: 0;
}
p {
  margin: 0;
}


.containerComponent {
  display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 0.5rem;
    inline-size: 90%;
    margin: auto;
}

#invitacion {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-block-start: 1.5rem;
   .invitacionFoto {
    color: var(--casar);

    img {
          block-size: 18rem;
    inline-size: auto;
    }
    h1 {
    margin: 0;
    font: var(--secondary);
    font-size: 3rem;
    color: var(--casar);
    margin-bottom: 3px;
     border-block: 3px solid var(--barra);
    margin-inline: 5%;
  }
    .casar {
    font: var(--primary);
    font-size: 1.4rem;
    margin-block-start: -4rem;
    margin-block-end: 0.5rem;
  }
}
  .datos {
    margin-block-start: 1rem;

    span {
          font: var(--tres);
    font-size: 1.2rem;
    color: var(--oscuro);
    }
    p {
       
    font: var(--siete);
    color: var(--casar);
    font-size: 0.9rem;
    }
  }
    .invitacionLogo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
    font: var(--cinco);
    font-size: 1.2rem;
    color: var(--oscuro);
    font-style: italic;
  }
    h3 {
    color: var(--oscuro);
    font: var(--cinco);
    font-size: 1.3rem;
  }
  }

}

#pasos {
  display: flex;
  flex-direction: column;
  inline-size: 85%;
  gap: 1rem;
  color: var(--oscuro);

.containerLogosAnillos {
    h4 {
      margin-block-start: .5rem;
      font: var(--seis);
      font-size: 1.2rem;
      color: var(--amarillo);
      text-align: center;
    } 
}
  .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    justify-content: space-between;
    border-bottom: 2px solid var(--background);
    .containerTitleLogo {
    display: flex;
    justify-content: space-between;
    align-items: center;
        p {
    font: var(--seis);
    font-size: 1.3rem;
  }
    h1 {
    font: var(--cinco);
    font-size: 1.4rem;
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }   

  }
    .containerInferiorLogo {
    padding-block: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
      p {
    font: var(--seis);
    line-height: 1.3rem;
    font-size: 1.1rem;
    margin-block-end: 0.3rem;
  }
     h2 {
    font: var(--seis);
    font-size: 1rem;
    line-height: 1.2rem;
  }
  h3 {
    font: var(--seis);
    margin-block-start: 1.2rem;
    font-style: italic;
    font-size: 1rem;
  }

  }
  }
    .contenAero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
  }

  .styleFecha {
    font-size: 1rem;
  }
   

  
  #vuelo {
    background-color: var(--box1);
  }
  #maleta {
  background-color: var(--box2);
      #outfit {
    font: var(--seis);
    font-size: 1.2rem;
    color: var(--amarillo);
    margin-block-start: 1.2rem;
    margin-block-end: 0.3rem;
  }
    .ropaConteiner {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 0.3rem;
  .iconoPerson {
    text-align: center;
  }
  .ropa {
    font: var(--seis);
    font-size: 1rem;
  }
  .person {
    font: var(--seis);
    font-size: 1rem;
    line-height: 0.8rem;
  }
  .containerPerson {
    display: flex;
    align-items: center;
  }
  }

  }
  #hospedaje {
    inline-size: 85%;
  background-color: var(--box3);
  h2{
    margin-block-start: 1.2rem;
    margin-block-end: 0.3rem;
    font: var(--seis);
    font-size: 1.1rem;
  }
  h3 {
    font: var(--tres);
  }
  .iconoHoteles {
    display: flex;
    justify-content: space-evenly;
    align-items:center;
  }
  }
  #transporte {
  background-color: var(--box4);

  .containerInferiorLogo {
    p {
      margin-block-start : 1rem;
    }
  }
.containerTitleLogo {
  p {
    font-size: 1.1rem;
  }
} 


    .carros {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-block-end: 0.8rem;
    align-items: center;
    margin-block-end: 1rem;
    margin-block-start: 0.5rem;
    h2 {
      font: var(--seis);
      font-size: 1rem;
      line-height: 1rem;
      text-decoration-line: underline;
      text-align: center;
    }
    p {
      font: var(--siete);
      font-size: 0.95rem;
    }
  }
  

  }
  .containerLogosAnillos {
    div {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    img {
      width: auto;
      height: 3.5rem;
    }
  }
  .containerTarjetaPasos {
    position: relative;
    display: flex;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    padding-inline: 1.5rem;
    padding-block: 1rem;
    gap: 0.5rem;
    .icono {
      position: absolute;
      inset-block-start: 21%;
      transform: translateX(-110%);
    } 
  }
}

#villavicencio {
    .logoVillavo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
     .titleVillavo {
    text-align: center;
    h1 {
      font: var(--cinco);
      font-size: 1.8rem;
      color: var(--oscuro);
    }
    p {
      font: var(--seis);
      font-size: 1.3rem;
      color: var(--amarillo);
    }
  }
  }
    .villavoGrid {
    margin: auto;
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    column-gap: 1rem;
    row-gap: 1.5rem;

    color: var(--oscuro);
      p {
    font: var(--seis);
    font-size: 1.1rem;
    line-height: 1.2rem;
    overflow: hidden;
  }
  .iconoVillavo {
    display: flex;
    justify-content: center;
  }
  .textMargin {
    margin-inline-end: 1rem;
  }
}
h2 {
  margin-top: 1rem;
  text-align: center;
  font: var(--cinco);
  font-size: 1.5rem;
  color: var(--amarillo);
}
}


#itinerario {
  display: flex;
  flex-direction: column;
  color: var(--oscuro);
  border-radius: 1.5rem;
  background-color: var(--box3);
  padding-block: 1rem;
  padding-inline: 1.5rem;
  inline-size: 75% !important;

    .superiorBarra {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 5px;
    block-size: 100%;
    justify-content: space-between;
  }

  h1 {
    font: var(--cinco);
    font-size: 1.6rem;
    line-height: 1.2rem;
  }
  .subItenerario {
    font: var(--seis);
    font-size: 1.2rem;
  }
  h2 {
    font: var(--seis);
    line-height: 1.3rem;
    color: var(--amarillo);
    font-size: 1.2rem;
    margin-block: 1.2rem;
  }
  h3 {
    font: var(--cinco);
    font-size: 1.4rem;
  }

  .fechaEvento {
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
  .descriptionEvent {
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

}

#regalos {
    inline-size: 70% !important;
  margin: auto;
  color: var(--oscuro);

  .containerRegalos {
    display: flex;
    margin: auto;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
  }
  h2 {
    font: var(--cinco);
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    color: var(--casar);
    font: var(--seis);
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-block-start: 0.5rem;
    line-height: 1.4rem;
  }
}

#pieDePagina {
   inline-size: 85%;
  margin: auto;
  margin-block: 0.5rem;
  .darioLogo {
    padding-block: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .darioFoto {
    width: 30%;
    height: auto;
  }
  .juntosFirma {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #redes {
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.7rem 0.5rem;
  background-color: var(--background);
  box-shadow: 2px 2px 5px rgba(000, 000, 000, 0.5);
  margin-block: 1rem;

  .redess {
    font: var(--siete);
    font-size: 1rem;

    color: var(--oscuro);
  }
  .instagram {
    transform: translateY(10%);
  }
}
  
}



`;

export default GlobalStylesStyled;
