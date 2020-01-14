import styled from 'styled-components';
import { styles } from 'utils';

export const Wrapper = styled.div`
  padding: 28rem 0 4rem 0;
  background-image: url('../illustrations/footer.svg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding: 7rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  svg {
    margin-right: 1.5rem;
  }

  .copyright {
    font-size: 1.5rem;
  }

  @media (min-width: ${styles.breakpoints.sm}) {
    margin-bottom: 0;
  }
`;
