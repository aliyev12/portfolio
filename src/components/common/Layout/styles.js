import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', Helvetica, sans-serif;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }
    a:active,
    a:hover {
      outline-width: 0;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    img {
      border-style: none;
    }

    svg:not(:root) {
      overflow: hidden;
    }
    code {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    html {
      font: 112.5%/1.45em georgia, serif;
      box-sizing: border-box;
      overflow-y: scroll;
    }
    img {
      max-width: 100%;
      padding: 0;
      margin: 0 0 1.45rem 0;
    }
    h1 {
      padding: 0;
      margin-bottom: 0 0 1.45rem 0;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 2.25rem;
      line-height: 1.1;
    }
    h2 {
      padding: 0;
      margin-bottom: 0 0 1.45rem 0;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.62671rem;
      line-height: 1.1;
    }
    h3 {
      padding: 0;
      margin-bottom: 0 0 1.45rem 0;
      color: inherit;
      font-weight: bold;
      text-rendering: optimizeLegibility;
      font-size: 1.38316rem;
      line-height: 1.1;
    }

    ul {
      padding: 0;
      margin-bottom: 0 0 1.45rem 1.45rem;
      list-style-position: outside;
      list-style-image: none;
    }

    p {
      padding: 0;
      margin-bottom: 0 0 1.45rem 0;
    }

    form {
      padding: 0;
      margin-bottom: 0 0 1.45rem 0;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Helvetica, sans-serif;
      color: hsla(0, 0%, 0%, 0.8);
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    }

    a {
      text-decoration: none;
    }

    input, select, textarea, button {
      &:focus {
        outline: none;
      }
    }
  }
`;
