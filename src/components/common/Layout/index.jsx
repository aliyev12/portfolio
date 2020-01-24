import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer, Header } from 'components/theme';
import useDarkMode from './useDarkMode';
import { styles } from 'utils';
import { GlobalStyles } from './globalStyles';

import './fonts.css';

const lightTheme = {
  name: 'light',
  body: styles.colors.mainWhite,
  text: styles.colors.mainBlack,
  hover: {
    main: styles.colors.mainBlue__light,
  },
  colors: {
    lightGrey: styles.colors.lightGrey,
    successGreen: styles.colors.successGreen__light,
  },
  inputBorders: {
    main: styles.colors.formBorderGrey__light,
    hover: styles.colors.mainBlack,
  },
  boxShadow: styles.boxShadow.light,
};

const darkTheme = {
  name: 'dark',
  body: styles.colors.mainBlack,
  text: styles.colors.mainWhite,
  hover: {
    main: styles.colors.mainBlue__dark,
  },
  colors: {
    lightGrey: styles.colors.darkGrey,
    successGreen: styles.colors.successGreen__dark,
  },
  inputBorders: {
    main: styles.colors.formBorderGrey__dark,
    hover: styles.colors.mainWhite,
  },
  boxShadow: styles.boxShadow.dark,
};

const Page = styled.div`
  height: 100vh;
`;

export const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Page>
        <Header theme={theme} toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </Page>
    </ThemeProvider>
  );
};
