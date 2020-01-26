import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Button from '@material-ui/core/Button';
import { LinksWrapper, MenuItem } from './styles';
import Toggle from './Toggle';
import { formatMenu } from './menuHelpers';
import useScroll from './useScroll';

export const MENU_ITEMS_LINKS = graphql`
  query {
    menuItems: allWordpressWpApiMenusMenusItems(
      filter: { slug: { eq: "top-navbar-menu" } }
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

const Links = ({ theme, toggleTheme }) => {
  const data = useStaticQuery(MENU_ITEMS_LINKS);
  const { navigateTo } = useScroll();
  const menuItems = formatMenu(data.menuItems);

  return (
    <LinksWrapper>
      {menuItems.map(menuItem => (
        <MenuItem key={menuItem.id} className="menu-item">
          <Button
            onClick={() => navigateTo(menuItem.href)}
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

export default Links;
