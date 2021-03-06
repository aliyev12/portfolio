import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from 'components/common';
import Links from './Links';
import SideList from './SideList';
import { MenuButton, LogoWrapper, HeaderWrapper, StyledDrawer } from './styles';
import useScroll from './useScroll';

const drawerStatuses = {
  open: 'open',
  closed: 'closed',
};

export const Header = ({ theme, toggleTheme }) => {
  const [drawerStatus, setDrawerStatus] = React.useState(drawerStatuses.closed);
  const { onHashChange, scrollToHashId, navigateTo } = useScroll();

  React.useEffect(() => {
    scrollToHashId();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const toggleDrawer = status => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    setDrawerStatus(status);
  };

  return (
    <HeaderWrapper id="header">
      <AppBar position="static" className="nav-bar">
        <Toolbar className="toolbar">
          <LogoWrapper title="Go to Main Page" to="/">
            <Logo width="57" height="57" />
            <span className="visually-hidden">Home Page</span>
          </LogoWrapper>
          <Links theme={theme} toggleTheme={toggleTheme} />
          <MenuButton
            aria-label="menu"
            className="menu-button"
            onClick={toggleDrawer(drawerStatuses.open)}
            title="Open Side Menu"
          >
            <MenuIcon />
          </MenuButton>
        </Toolbar>
      </AppBar>
      <StyledDrawer
        anchor="right"
        open={drawerStatus === drawerStatuses.open}
        onClose={toggleDrawer(drawerStatuses.closed)}
        className="drawer"
      >
        <SideList
          closeDrawer={toggleDrawer(drawerStatuses.closed)}
          theme={theme}
          toggleTheme={toggleTheme}
          handleListClick={async pageName => {
            await setDrawerStatus(drawerStatuses.closed);
            navigateTo(pageName);
          }}
        />
      </StyledDrawer>
    </HeaderWrapper>
  );
};
