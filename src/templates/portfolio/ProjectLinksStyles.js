import styled from 'styled-components';
import { styles } from 'utils';

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 1rem 0;
  .project-link-btn {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    transition: ${styles.transition};
    margin: 1rem 0;

    .desktop {
      display: inline;
    }
    .mobile {
      display: none;
    }

    &.site {
      background-color: ${styles.colors.mainBlue};
      color: ${styles.colors.mainWhite};

      &:hover {
        color: ${styles.colors.mainBlack};
      }
    }

    &:hover {
      color: ${({ theme }) => theme.text};
      background-color: ${({ theme }) => theme.body};
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    flex-direction: row;

    .project-link-btn {
      margin-left: 2rem;

      .desktop {
        display: none;
      }
      .mobile {
        display: inline;
      }

      &.site {
        margin-right: auto;
        margin-left: 0;
      }
    }
  }
  @media (min-width: ${styles.breakpoints.md}) {
    flex-direction: row;
    /* margin: 3rem 0; */

    .project-link-btn {
      .desktop {
        display: inline;
      }
      .mobile {
        display: none;
      }
    }
  }
`;
