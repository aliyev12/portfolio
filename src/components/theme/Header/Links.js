import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { LinksWrapper, MenuItem, Close, SideListWrapper } from './styles';
import Toggle from './Toggle';
import { formatMenu } from './menuHelpers';

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

const handleClick = elementId => {
  const page = document.querySelector(elementId);
  if (page) page.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Links = ({ theme, toggleTheme }) => {
  const data = useStaticQuery(MENU_ITEMS);
  const menuItems = formatMenu(data.menuItems);

  return (
    <LinksWrapper>
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

export const SideList = ({ closeDrawer, theme, toggleTheme }) => {
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
              onClick={() => handleClick(menuItem.href)}
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
