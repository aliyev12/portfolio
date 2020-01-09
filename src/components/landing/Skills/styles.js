import styled from 'styled-components';
import aboutMeIllustration from 'assets/illustrations/about_overlay.svg';
import { styles } from 'utils';

export const SkillsWrapper = styled.div`
  background-image: url(${aboutMeIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsMain = styled.div`
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
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.text};
  }

  p {
    margin-bottom: 2.5rem;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};

    @media (min-width: ${styles.breakpoints.sm}) {
      font-size: 2rem;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  svg {
    width: 100%;
  }
`;
