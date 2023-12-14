import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-grey-0: #fff;
  --color-grey-100: #dedede;
  --color-grey-200: #bebebe;
  --color-grey-300: #9e9e9e;
  --color-grey-400: #808080;
  --color-grey-500: #636363;
  --color-grey-600: #484848;
  --color-grey-700: #2e2e2e;
  --color-grey-800: #161616;
  --color-grey-900: #000000;

  --backdrop-color: rgba(255, 255, 255, 1);

  --border-radius-sm: .5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 2rem;

  --container-width: 800px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;

  transition: all 0.1s ease-in-out;
}

body {
  font-family: 'Noto Serif', serif;
  background-color: rgb(255, 255, 255);
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

h1 {
  font-family: 'Noto Serif Display', serif;
}

h2,
h3,
h4,
h5,
h6,
p {
  font-family: 'Noto Serif', serif
}

a,
li {
  text-decoration: none;
  list-style: none;
}

/* h1 {
  font-size: 11rem;
  font-weight: 300;
  line-height: 11rem;
  letter-spacing: -0.8rem;
  color: rgba(0, 0, 0, 1);
} */

input {
  font-family: 'Noto Serif', serif;
  font-size: 2rem;
}

button {
  cursor: pointer;
  font-family: 'Noto Serif', serif;
  width: 100%;
  
}
`;

export default GlobalStyles;
