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
  
  --color-danger: #E9B195;

  --background-color: #F9F5EF;

  --border-radius-sm: .5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 2rem;

  --container-width: 600px;
  --container-width-small: 450px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;


}

body {
  font-family: 'Noto Serif', serif;
  background-color: var(--background-color);
  overflow-x: hidden;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

h1,
h2 {
  font-family: 'Noto Serif Display', serif;
}

h3,
h4,
h5,
h6,
p {
  font-family: 'Noto Serif', serif
}

p {
  font-size: 1.8rem;
  text-align: left;
  line-height: 3.6rem;
}

h3 {
  font-size: 1.8rem;
  font-weight: 300;
}

h4 {
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-grey-300);
  padding-bottom: .3rem;
}

a,
li {
  text-decoration: none;
  list-style: none;
}

input,
textarea,
::file-selector-button {
  font-family: 'Noto Serif', serif;
  font-size: 1.6rem;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
    border-bottom: 1px solid var(--color-grey-900);
}

button {
  cursor: pointer;
  font-family: 'Noto Serif', serif;
  width: 100%;
  
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid var(--color-grey-200);
}

#about, #writer {
  scroll-margin-top: 8rem;
}

#contact {
  scroll-margin-top: 0rem;
}
`;

export default GlobalStyles;
