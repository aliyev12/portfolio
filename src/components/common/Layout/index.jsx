import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Footer, Header } from 'components/theme';
import useDarkMode from './useDarkMode';
import { styles } from 'utils';
import { GlobalStyles } from './globalStyles';

import './fonts.css';

const lightTheme = {
  body: styles.colors.mainWhite,
  text: styles.colors.mainBlack,
  hover: {
    main: styles.colors.mainBlue__light,
  },
  colors: {
    lightGrey: styles.colors.lightGrey,
  },
  boxShadow: `
    0px 2px 4px -1px rgba(51,51,51, 0.2),
    0px 4px 5px 0px rgba(51,51,51, 0.14), 
    0px 1px 10px 0px rgba(51,51,51, 0.12);
`,
};

const darkTheme = {
  body: styles.colors.mainBlack,
  text: styles.colors.mainWhite,
  hover: {
    main: styles.colors.mainBlue__dark,
  },
  colors: {
    lightGrey: styles.colors.darkGrey,
  },
  boxShadow: `
    0px 2px 4px -1px rgba(255,255,255, 0.2),
    0px 4px 5px 0px rgba(255,255,255, 0.14), 
    0px 1px 10px 0px rgba(255,255,255, 0.12);
  `,
};

export const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
