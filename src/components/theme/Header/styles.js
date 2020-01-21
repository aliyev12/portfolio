import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'gatsby';
// import Link from 'gatsby-plugin-transition-link/AniLink';
import { styles } from 'utils';

export const MenuButton = styled(IconButton)`
  margin-right: 2rem;
  svg {
    color: ${({ theme }) => theme.text};
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    transition: ${styles.transition};
  }

  &:hover svg {
    /* color: ${styles.colors.mainBlue}; */
    transform: scale(1.3);
  }
`;

export const LogoWrapper = styled(Link)`
  flex-grow: 1;
  svg {
    display: flex;
  }
`;

export const HeaderWrapper = styled.nav`
  flex-grow: 1;

  header.nav-bar.MuiAppBar-colorPrimary {
    background-color: ${({ theme }) => theme.body};
    box-shadow: ${({ theme }) => theme.boxShadow};
    transition: ${styles.transition};

    .toolbar {
      min-height: 90px;
      .menu-button {
      }
    }
  }

  .drawer {
    .MuiDrawer-paper.MuiDrawer-paperAnchorRight {
      background-color: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      transition: ${styles.transition};
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    header.nav-bar.MuiAppBar-colorPrimary {
      .toolbar {
        min-height: 90px;
        .menu-button {
          display: none;
        }
      }
    }
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper.MuiDrawer-paperAnchorRight {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: ${styles.transition};
  }
`;

export const LinksWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: ${styles.breakpoints.sm}) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  margin: 0 1rem;
  .nav-link {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    text-transform: capitalize;
    transition: ${styles.transition};
  }
`;

export const SideListWrapper = styled.aside`
  position: relative;
  width: 20rem;

  ul {
    padding-top: 0;

    .list-item-top {
      justify-content: space-between;
    }

    .divider {
      background-color: ${({ theme }) => theme.text};
      margin-bottom: 2rem;
      transition: ${styles.transition};
    }

    .list-item-btn {
      .avatar {
        background-color: ${styles.colors.mainBlue};
        transition: ${styles.transition};
        svg {
          transition: ${styles.transition};
        }
      }

      .title {
        span {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.text};
          transition: ${styles.transition};
        }
      }

      &:hover .avatar {
        background-color: ${({ theme }) => theme.text};
        transition: ${styles.transition};
      }
      &:hover .avatar svg {
        color: ${({ theme }) => theme.body};
        transition: ${styles.transition};
      }
    }
  }
`;

export const Close = styled(IconButton)`
  svg {
    color: ${({ theme }) => theme.text};
    transition: ${styles.transition};
  }
`;
