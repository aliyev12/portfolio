import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Logo } from 'components/common';
import { Container } from 'components/common';
import Drawer from './Drawer';
import NavbarLinks from './NavbarLinks';
import {
  HeaderWrapper,
  NavbarWrapper,
  Overlay,
  SidebarWrapper,
} from './styles';

export const Header = props => {
  const [sidebar, toggle] = useState(false);

  return (
    <HeaderWrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <NavbarWrapper as={Container}>
        <AniLink to="/">
          <Logo width="57" height="57" />
        </AniLink>
        <NavbarLinks desktop {...props} />
      </NavbarWrapper>
      <Hamburger sidebar={sidebar} toggle={toggle} />
      {/* <Sidebar sidebar={sidebar} toggle={toggle} /> */}
      <SidebarWrapper active={sidebar} onClick={() => toggle(!sidebar)}>
        <NavbarLinks {...props} />
      </SidebarWrapper>
      <Drawer />
    </HeaderWrapper>
  );
};
