import styled from 'styled-components';
import { styles } from 'utils';

export const ProjectsWrapper = styled.div`
  margin-bottom: 4rem;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;

  main {
    width: 90%;
    margin: 0 auto;
    .project-page-title {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.text};
      text-align: center;

      @media (min-width: ${styles.breakpoints.xl}) {
        text-align: left;
      }
    }
  }

  @media (min-width: ${styles.breakpoints.md}) {
    margin-bottom: 6rem;
    padding: 3rem 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 8fr;
  justify-items: center;
  align-items: start;
  gap: 3rem;

  @media (min-width: 730px) {
    grid-template-columns: repeat(2, 30rem);
    justify-content: center;
  }
  @media (min-width: ${styles.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${styles.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
