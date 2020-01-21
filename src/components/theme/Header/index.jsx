import React from 'react';
import { navigate } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Logo } from 'components/common';
import { Links, SideList } from './Links';
import { MenuButton, LogoWrapper, HeaderWrapper, StyledDrawer } from './styles';

const drawerStatuses = {
  open: 'open',
  closed: 'closed',
};

export const Header = ({ theme, toggleTheme }) => {
  const [drawerStatus, setDrawerStatus] = React.useState(drawerStatuses.closed);

  const toggleDrawer = status => e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    setDrawerStatus(status);
    console.log('in func');
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
            if (window.location.pathname === '/') {
              const page = document.querySelector(pageName);
              if (page)
                page.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              navigate(`/${pageName}`);
            }
          }}
        />
      </StyledDrawer>
    </HeaderWrapper>
  );
};
