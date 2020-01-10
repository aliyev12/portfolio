import styled, { ThemeConsumer } from 'styled-components';
import { styles } from 'utils';

export const ProjectsWrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  width: 100%;

  main {
    width: 90%;
    margin: 0 auto;
    .project-page-title {
      margin: 4rem 0;
      color: ${({ theme }) => theme.text};
      text-align: center;

      @media (min-width: ${styles.breakpoints.xl}) {
        text-align: left;
      }
    }
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

  /* @media (min-width: ${styles.breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  } */
  @media (min-width: 730px) {
    grid-template-columns: repeat(2,30rem);
    justify-content: center;
  }
  /* @media (min-width: ${styles.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  } */
  @media (min-width: ${styles.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${styles.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
