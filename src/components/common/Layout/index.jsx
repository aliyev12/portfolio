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
};

const darkTheme = {
  body: styles.colors.mainBlack,
  text: styles.colors.mainWhite,
  hover: {
    main: styles.colors.mainBlue__dark,
  },
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
