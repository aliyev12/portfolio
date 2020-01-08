import React from 'react';
import { HamburgerWrapper, Bar } from './styles';

const Hamburger = ({ sidebar, toggle }) => (
  <HamburgerWrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} className="bar" />
    <Bar mid sidebar={sidebar} className="bar" />
    <Bar bottom sidebar={sidebar} className="bar" />
  </HamburgerWrapper>
);

export default Hamburger;
