import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { LinksWrapper, MenuItem } from './styles';
import Toggle from '../Toggle';
import formatMenu from './formatMenu';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const MENU_ITEMS = graphql`
  query {
    menuItems: allWordpressWpApiMenusMenusItems(
      filter: { name: { eq: "Top Navbar Menu" } }
    ) {
      edges {
        node {
          items {
            id: wordpress_id
            title
            href: url
            slug: object_slug
          }
        }
      }
    }
  }
`;

const NavbarLinks = ({ desktop, theme, toggleTheme }) => {
  const data = useStaticQuery(MENU_ITEMS);
  const menuItems = formatMenu(data.menuItems);

  const handleClick = elementId => {
    const page = document.querySelector(elementId);
    if (page) page.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <LinksWrapper desktop={desktop}>
      {menuItems.map(menuItem => (
        <MenuItem key={menuItem.id} className="menu-item">
          <Button
            onClick={() => handleClick(menuItem.href)}
            className="nav-link"
          >
            {menuItem.title}
          </Button>
        </MenuItem>
      ))}
      <MenuItem className="menu-item">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </MenuItem>
    </LinksWrapper>
  );
};

export default NavbarLinks;
