import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { Close, SideListWrapper } from './styles';
import Toggle from './Toggle';
import { Social } from 'components/common';
import { formatMenu } from './menuHelpers';

export const MENU_ITEMS = graphql`
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

const SideList = ({ closeDrawer, theme, toggleTheme, handleListClick }) => {
  const data = useStaticQuery(MENU_ITEMS);
  const menuItems = formatMenu(data.menuItems);

  return (
    <SideListWrapper role="presentation">
      <List>
        <ListItem className="list-item-top">
          <Close
            className="close-btn"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
            title="Close Side Menu"
          >
            <CloseIcon />
          </Close>
          <Social width="15" height="15" />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </ListItem>
        <Divider className="divider" />
        {menuItems.map(menuItem => {
          let icon = <InfoIcon />;
          switch (menuItem.slug) {
            case 'about':
              icon = <InfoIcon />;
              break;
            case 'projects':
              icon = <WorkIcon />;
              break;
            case 'contact':
              icon = <ContactMailIcon />;
              break;
            default:
              icon = <InfoIcon />;
              break;
          }

          return (
            <ListItem
              className="list-item-btn"
              button
              key={menuItem.id}
              title={`Scroll down to ${menuItem.title} section`}
              onClick={() => handleListClick(menuItem.href)}
            >
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar className="avatar">{icon}</Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary={menuItem.title} className="title" />
            </ListItem>
          );
        })}
      </List>
    </SideListWrapper>
  );
};

export default SideList;
