import styled from 'styled-components';
import { styles } from 'utils';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: ${styles.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-right: unset;
  width: 100%;
  order: 1;

  .contact-page-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (min-width: ${styles.breakpoints.md}) {
    padding-right: 2rem;
    order: 0;

    .contact-page-title {
      text-align: left;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 10rem;
  }

  @media (min-width: ${styles.breakpoints.md}) {
    img {
      width: 100%;
    }
  }
`;
