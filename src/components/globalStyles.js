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

`;

export default GlobalStylesStyled;
