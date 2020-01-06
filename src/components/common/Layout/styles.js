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
      ${styles.transition};
    }
  }
`;
