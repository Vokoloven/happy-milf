import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
}

button {
  cursor: pointer;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
list-style: none;
padding: 0;
}
`;
