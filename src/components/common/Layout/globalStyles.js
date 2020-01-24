import { createGlobalStyle } from 'styled-components';
import { styles } from 'utils';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    /* transition: ${styles.transition}; */
  }

  /* Below autofill styles are for disabling Chrome's autofill background color for inputs */
  *:-webkit-autofill,
  *:-webkit-autofill:hover,
  *:-webkit-autofill:focus,
  *:-webkit-autofill:active {
    /* use animation hack, if you have hard styled input */
    transition: all 5000s ease-in-out 0s;
    transition-property: background-color, color;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
  }

  html {
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    
    body {
      display: flex;
      justify-content: center;
      align-content: center;
      margin: 0;
      padding: 0;
      font-family: ${styles.fonts.roboto};
      min-height: 100vh;
      flex-direction: column;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      overflow: auto;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      /* transition: ${styles.transition}; */

      h1 {
        font-size: 3.2rem;
      }
      h2 {
        font-size: 2.8rem;
      }

      @media(min-width: ${styles.breakpoints.sm}) {
        h1 {
          font-size: 4rem;
        }
        h2 {
          font-size: 3.2rem;
        }
      }

      .MuiListItem-button:hover,
      .MuiIconButton-root:hover,
      .MuiButton-root:hover {
        background-color: ${({ theme }) => theme.hover.main};
      }

      .visually-hidden { 
          position: absolute !important;
          height: 1px; 
          width: 1px;
          overflow: hidden;
          clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
          clip: rect(1px, 1px, 1px, 1px);
          white-space: nowrap; /* added line */
          background-color: white;
          color: black;
      }
    }
  }
`;
