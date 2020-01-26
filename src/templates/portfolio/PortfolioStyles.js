import styled from 'styled-components';
import { styles } from 'utils';
import Paper from '@material-ui/core/Paper';

export const ImgPaper = styled(Paper)`
  margin: 2rem 0;
  padding: 1rem 1rem 0 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow} !important;
  background-color: ${({ theme }) => theme.body} !important;

  .gatsby-image-wrapper {
    img {
    }
  }
`;

export const PortfolioWrapper = styled.section`
  width: 100%;
  padding: 0 1.5rem;

  .main-content {
    margin: 0 auto;
    max-width: ${({ containerWidth }) => containerWidth}px;

    .page-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4rem 0 0 0;

      .title {
        color: ${({ theme }) => theme.text};
        font-size: 3rem;
        text-align: center;
      }
    }
    .short-description {
      line-height: 1.5;
      font-size: 1.6rem;
      margin: 2rem 0 0;
    }

    .description-container {
      margin: 3rem 0;
      font-size: 1.6rem;
      line-height: 1.5;

      h3 {
        text-align: center;
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 2rem;
      }

      ul {
        margin-left: 4rem;
        margin-bottom: 2rem;
      }
    }

    .chips-container {
      display: flex;
      margin-top: 3rem;
    }
    .get-in-touch {
    }
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    padding: 0 3rem;
    .main-content {
    }
  }

  @media (min-width: ${styles.breakpoints.md}) {
    padding: 0 5rem;
    .main-content {
      .page-title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0 2rem 0;

        .title {
          color: ${({ theme }) => theme.text};
          font-size: 6rem;
        }
      }

      .short-description {
        line-height: 1.7;
        margin: 3rem 0 1rem 0;
      }

      .description-container {
        line-height: 2;
        margin: 6rem 0;

        ul {
          margin-left: 8rem;
        }
      }

      .chips-container {
        display: none;
      }
    }
  }
`;
