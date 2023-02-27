import { createGlobalStyle } from "styled-components";

const GlobalStylesStyled = createGlobalStyle`
:root {
  --background: #f2efea;
  --marry: #9e6a56;
  --bar: #c9ae7e;
  --dark: #704e39;
  --yellow: #CE7F3A;
  --box1: #f1b48c;
  --box2: #eecdb0;
  --box3: #f7dbc3;
  --box4: #fcd3c2;
  --primary:italic 600  1rem Playfair Display ;
  --secondary: 600 2.3rem Playfair Display;
  --three: 0.8125rem Prata;
  --four: 600 0.33125rem Playfair Display;
  --five: 1rem bebas kai;
  --six:  0.83125rem bahnschrift;
  --seven: 0.58125rem bahnschrift;
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


.container-component {
  display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 0.5rem;
    max-inline-size: 1000px;
  inline-size: 90%;
    margin: auto;
}

#invitation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  margin-block-start: 1.5rem;
   .invitation-photo {
    color: var(--marry);

    img {
          block-size: 18rem;
    inline-size: auto;
    }
    h1 {
    margin: 0;
    font: var(--secondary);
    font-size: 3rem;
    color: var(--marry);
    margin-bottom: 3px;
     border-block: 3px solid var(--bar);
    margin-inline: 5%;
  }
    .marry {
    font: var(--primary);
    font-size: 1.4rem;
    margin-block-start: -4rem;
    margin-block-end: 0.5rem;
  }
}
  .data {
    margin-block-start: 1rem;

    span {
          font: var(--three);
    font-size: 1.2rem;
    color: var(--dark);
    }
    p {
       
    font: var(--seven);
    color: var(--marry);
    font-size: 0.9rem;
    }
  }
    .invitation-logo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
    font: var(--five);
    font-size: 1.2rem;
    color: var(--dark);
    font-style: italic;
  }
    h3 {
    color: var(--dark);
    font: var(--five);
    font-size: 1.3rem;
  }
  }

}

#steps {
  display: flex;
  flex-direction: column;
  inline-size: 85%;
  gap: 1rem;
  color: var(--dark);

.container-logos-rings {
    h4 {
      margin-block-start: .5rem;
      font: var(--six);
      font-size: 1.2rem;
      color: var(--yellow);
      text-align: center;
    } 
}
.container-card-steps {
  inline-size: 85%;
}
  .top-bar {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    justify-content: space-between;
    border-bottom: 2px solid var(--background);
    .container-title-logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
        p {
    font: var(--six);
    font-size: 1.3rem;
  }
    h1 {
    font: var(--five);
    font-size: 1.4rem;
    line-height: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }   

  }
    .container-bottom-logo {
    padding-block: 0.3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
      p {
    font: var(--six);
    line-height: 1.3rem;
    font-size: 1.1rem;
    margin-block-end: 0.3rem;
  }
     h2 {
    font: var(--six);
    font-size: 1rem;
    line-height: 1.2rem;
  }
  h3 {
    font: var(--six);
    margin-block-start: 1.2rem;
    font-style: italic;
    font-size: 1rem;
  }

  }
  }
    .conten-aero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
  }

  .style-date {
    font-size: 1rem;
  }
   

  
  #flight {
    background-color: var(--box1);
  }
  #suitcase {
  background-color: var(--box2);
      #outfit {
    font: var(--six);
    font-size: 1.2rem;
    color: var(--yellow);
    margin-block-start: 1.2rem;
    margin-block-end: 0.3rem;
  }
    .clothes-conteiner {
    display: grid;
    grid-template-columns: 1fr 7fr;
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 0.3rem;
  .icon-person {
    text-align: center;
  }
  .clothes {
    font: var(--six);
    font-size: 1rem;
  }
  .person {
    font: var(--six);
    font-size: 1rem;
    line-height: 0.8rem;
  }
  .container-person {
    display: flex;
    align-items: center;
  }
  }

  }
  #lodging {
  background-color: var(--box3);
  h2{
    margin-block-start: 1.2rem;
    margin-block-end: 0.3rem;
    font: var(--six);
    font-size: 1.1rem;
  }
  h3 {
    font: var(--three);
  }
  .icon-hotels {
    display: flex;
    justify-content: space-evenly;
    align-items:center;
  }
  }
  #transport {
  background-color: var(--box4);

  .container-bottom-logo {
    p {
      margin-block-start : 1rem;
    }
  }



    .cars {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-block-end: 0.8rem;
    align-items: center;
    margin-block-end: 1rem;
    margin-block-start: 0.5rem;
      
    .button-transport {
      text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: .8rem;
  max-inline-size: 8rem;
  letter-spacing: 0.125rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
      }

.button-transport:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
      }
    p {
      font: var(--seven);
      font-size: 0.95rem;
    }
  }
  

  }
  .container-logos-rings {
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
  .container-card-steps {
    position: relative;
    display: flex;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    padding-inline: 1.5rem;
    padding-block: 1rem;
    gap: 0.5rem;
    .icon {
      position: absolute;
      inset-block-start: 21%;
      transform: translateX(-110%);
    } 
  }
}

#villavicencio {
    .logo-villavo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
     .titleVillavo {
    text-align: center;
    h1 {
      font: var(--five);
      font-size: 1.8rem;
      color: var(--dark);
    }
    p {
      font: var(--six);
      font-size: 1.3rem;
      color: var(--yellow);
    }
  }
  }
    .villavo-grid {
    margin: auto;
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    column-gap: 1rem;
    row-gap: 1.5rem;

    color: var(--dark);
      p {
    font: var(--six);
    font-size: 1.1rem;
    line-height: 1.2rem;
    overflow: hidden;
  }
  .icon-villavo {
    display: flex;
    justify-content: center;
  }
  .text-margin {
    margin-inline-end: 1rem;
  }
}
h2 {
  margin-top: 1rem;
  text-align: center;
  font: var(--five);
  font-size: 1.5rem;
  color: var(--yellow);
}
}

#itinerary {
  display: flex;
  flex-direction: column;
  color: var(--dark);
  border-radius: 1.5rem;
  background-color: var(--box3);
  padding-block: 1rem;
  padding-inline: 1.5rem;
  inline-size: 75%;

    .top-bar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 5px;
    block-size: 100%;
    justify-content: space-between;
  }

  h1 {
    font: var(--five);
    font-size: 1.6rem;
    line-height: 1.2rem;
  }
  .sub-itinerary {
    font: var(--six);
    font-size: 1.2rem;
  }
  h2 {
    font: var(--six);
    line-height: 1.3rem;
    color: var(--yellow);
    font-size: 1.2rem;
    margin-block: 1.2rem;
  }
  h3 {
    font: var(--five);
    font-size: 1.4rem;
  }

  .date-event {
    font: var(--ocho);
    line-height: 0.8rem;
    font-size: 1.2rem;
    color: var(--yellow);
    margin-block: 0.5rem;
  }
  .style-fech {
    font: var(--six);
    font-size: 1.2rem;
  }
  .description-event {
    font: var(--six);
    font-size: 1.1rem;

    line-height: 1.2rem;
  }
  .container-itine {
    display: flex;
    block-size: 100%;
    flex-direction: column;
    justify-content: space-between;
      .place-link {
    text-decoration: none;
    color: var(--dark);
    text-decoration: underline;

    
  }
  }
  .section-itinerary {
    display: grid;
    grid-template-columns: 1fr 7fr;
    gap: 0.5rem;
  }
  .pre-wedding {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  .day {
    padding-block: 1.2rem;
    margin-block-start: 1.2rem;
    margin-block-end: 0.7rem;
    border-block: 2px solid var(--background);
  }

  .m {
    margin-top: 0.4rem;
  }

  .event {
    text-align: center;
    margin-top: 0.2rem;
  }
  .schedule {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

}

#gifts {
    inline-size: 70%;
  margin: auto;
  color: var(--dark);

  .container-gifts {
    display: flex;
    margin: auto;
    gap: 1.5rem;
    justify-content: space-between;
    align-items: center;
    inline-size: 100%;
  }
  h2 {
    font: var(--five);
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
  h3 {
    color: var(--marry);
    font: var(--six);
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-block-start: 0.5rem;
    line-height: 1.4rem;
  }
}

#footer {
   inline-size: 85%;
  margin: auto;
  margin-block: 0.5rem;
  .dario-logo {
    padding-block: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dario-photo {
    width: 30%;
    height: auto;
  }
  .together-sign {
    width: 20rem;
    height: auto; 
    display: flex;
    justify-content: center;
  }

  #networks {
  border-radius: 0.5rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.7rem 0.5rem;
  background-color: var(--background);
  box-shadow: 2px 2px 5px rgba(000, 000, 000, 0.5);
  margin-block: 1rem;

  .networkss {
    font: var(--seven);
    font-size: 1rem;
    color: var(--dark);
  }
  .instagram {
    transform: translateY(10%);
  }
}
  
}
@media screen and (max-width: 1980px) {
  :root{
    font-size: 22px; 
  }
}
@media screen and (max-width: 920px) {
  :root {
    font-size: 20px;
  }
  
}
@media screen and (max-width: 760px) {
  :root {
    font-size: 16px;
  }
}



`;

export default GlobalStylesStyled;
