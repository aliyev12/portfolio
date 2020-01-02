import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

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

const NavbarLinks = ({ desktop }) => {
  const data = useStaticQuery(MENU_ITEMS);
  const menuItems = formatMenu(data.menuItems);
  console.log('menuItems = ', menuItems);

  return (
    <Wrapper desktop={desktop}>
      {menuItems.map(menuItem => (
        <AnchorLink href={menuItem.href} key={menuItem.id}>
          {menuItem.title}
        </AnchorLink>
      ))}
    </Wrapper>
  );
};

export default NavbarLinks;

function formatMenu(items) {
  const menuItems = [];

  if (items.edges && items.edges.length) {
    const { node } = items.edges[0];
    if (node && node.items && node.items.length) {
      node.items.forEach(el => {
        const item = {
          id: '',
          title: '',
          href: '',
          slug: '',
        };
        if (el.id) item.id = el.id;
        if (el.title) item.title = el.title;
        if (el.href) item.href = el.href;
        if (el.slug) item.slug = el.slug;
        menuItems.push(item);
      });
    }
  }
  return menuItems;
}
