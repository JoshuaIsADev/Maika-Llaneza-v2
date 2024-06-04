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

  --container-width: 40vw;
  --container-width-small: 800px;

  --grid-column: 20vw 40vw 40vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
  background-color: var(--background-color);
  overflow-x: hidden;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
    font-size: 16px;
}

p {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;
  line-height: 2rem;
}

a,
li {
  text-decoration: none;
  list-style: none;
  color: var(--color-grey-900);
}

a:hover {
  color: var(--color-grey-300);
}

.font-special {
  font-family: "Palette Mosaic", system-ui;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
}

.font-l {
  font-style: normal;
  font-size: 6rem;
  line-height: 6rem;
}

.font-m {
  font-style: normal;
  font-size: 3rem;
  line-height: 3rem;
}

.font-s {
  font-style: normal;
  font-size: 2rem;
}

.font-xs {
  font-style: normal;
  font-size: 1.5rem;
}

.font-xxs {
  font-style: normal;
  font-size: .8rem;
  line-height: 1rem;
}

.font-bold {
  font-weight: 700;
}

.font-special-link:hover {
font-size: 2.5rem;
color: var(--color-grey-900);
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
  font-family: "Inter", sans-serif;
  width: 100%;
}

hr {
  width: 100%;
  border: none;
  border-top: 1px solid var(--color-grey-200);
}

#hero {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-top: 12rem;
}

#about {
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;
}

#writer {
  grid-column: 2 / span 1;
  grid-row: 4 / span 1;
}

#projects {
  grid-column: 2 / span 1;
  grid-row: 5 / span 1;
}

#about, #writer, #projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  scroll-margin-top: 12rem;
}

#contact {
  grid-column: 2 / span 1;
  grid-row: 6 / span 1;
  scroll-margin-top: 0rem;
  /* text-align: center; */
}

#hero, #about, #writer, #projects, #contact {
  padding-bottom: 6rem;
}
`;

export default GlobalStyles;
