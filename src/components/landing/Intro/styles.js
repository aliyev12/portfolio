import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay_3.svg';
import { styles } from 'utils';

export const IntroWrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    margin-bottom: 2.5rem;
    font-weight: normal;
    color: ${({ theme }) => theme.text};
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  width: 100%;

  svg {
    width: 100%;
    height: 30rem;
  }
`;
