import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { styles } from 'utils';

const leftImgMargin = 10;
const rightImgMargin = leftImgMargin;

export const TechWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;

  .mobile-chips {
    display: flex;
  }
  @media (min-width: ${styles.breakpoints.md}) {
    .mobile-chips {
      display: none;
    }
  }
`;

export const Content = styled.main`
  display: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.text};
  border: 0.1rem solid ${styles.colors.mainBlue};
  border-radius: 0.5rem;
  padding: 1rem;

  .title {
    display: none;
  }

  .logos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    box-shadow: ${styles.boxShadow.dark};
    margin: 2rem 0;
    width: 100%;
    padding: 1rem;

    img {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: ${leftImgMargin}px;
      margin-right: ${rightImgMargin}px;
    }
  }

  .chips-container {
    .chip {
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.text};
      height: 2.2rem;
      font-size: 1rem;
      margin: 0.5rem 0.4rem;

      .MuiChip-avatar {
        color: ${({ theme }) => theme.body};
        background-color: ${({ theme }) => theme.text};
        margin-left: 0.2rem;
        width: 1.6rem;
        height: 1.6rem;
      }
      .MuiChip-label {
        padding-right: 0.6rem;
      }
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    .logos-container {
      img {
      }
    }
  }
  @media (min-width: ${styles.breakpoints.md}) {
    display: flex;
    .title {
      display: flex;
      font-size: 3rem;
      color: ${({ theme }) => theme.text};
      margin-top: 1rem;
    }

    .logos-container {
      img {
      }
    }
  }
`;
