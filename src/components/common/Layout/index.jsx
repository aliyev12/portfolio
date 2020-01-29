import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import debounce from 'debounce';
import Fab from '@material-ui/core/Fab';
import ToTopIcon from '@material-ui/icons/VerticalAlignTop';
import { Footer, Header } from 'components/theme';
import useDarkMode from './useDarkMode';
import { styles } from 'utils';
import { GlobalStyles } from './globalStyles';
import useScroll from '../../theme/Header/useScroll';

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
  position: relative;
  overflow: auto;
  height: 100%;
`;

export const StyledFab = styled(Fab)`
  position: fixed;
  z-index: 999;
  bottom: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.text};
  opacity: 0.5;
  transition: ${styles.transition};

  &:hover {
    background-color: ${({ theme }) => theme.text};
    opacity: 0.8;
  }

  svg {
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.body};
  }
`;

export const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const [showToTop, setShowToTop] = React.useState(false);
  const [introDetailsEl, setIntroDetailsEl] = React.useState(null);
  const { navigateTo } = useScroll();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  React.useEffect(() => {
    const introDetails = document.getElementById('intro-details');
    if (introDetails) {
      setIntroDetailsEl(introDetails);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [introDetailsEl]);

  const handleScroll = debounce(() => {
    if (introDetailsEl) {
      const bounding = introDetailsEl.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setShowToTop(false);
      } else {
        setShowToTop(true);
      }
    }
  }, 20);

  const ToTopBtn = styled(StyledFab)`
    visibility: ${showToTop ? 'visible' : 'hidden'};
  `;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Page>
        <Header theme={theme} toggleTheme={toggleTheme} />
        {children}
        <Footer />
        <ToTopBtn
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={() => {
            navigateTo(`top`);
          }}
        >
          <ToTopIcon />
        </ToTopBtn>
      </Page>
    </ThemeProvider>
  );
};
