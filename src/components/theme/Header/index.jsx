import React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import { Logo } from 'components/common';
import { Links, SideList } from './Links';
import { styles } from 'utils';
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
  };

  return (
    <HeaderWrapper>
      <AppBar position="static" className="nav-bar">
        <Toolbar className="toolbar">
          <LogoWrapper title="Go to Main Page" fade to="/">
            <Logo width="57" height="57" />
          </LogoWrapper>
          <Links theme={theme} toggleTheme={toggleTheme} />
          <MenuButton
            edge="starts"
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
        />
      </StyledDrawer>
    </HeaderWrapper>
  );
};
