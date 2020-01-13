import styled from 'styled-components';
import aboutMeIllustration from 'assets/illustrations/about_overlay.svg';
import { styles } from 'utils';

export const SkillsWrapper = styled.div`
  margin-bottom: 4rem;
  background-image: none;

  @media (min-width: ${styles.breakpoints.md}) {
    margin-bottom: 6rem;
    background-image: url(${aboutMeIllustration});
    background-size: contain;
    background-position: left top;
    background-repeat: no-repeat;
  }
`;

export const SkillsMain = styled.div`
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
    text-align: center;

    @media (min-width: ${styles.breakpoints.md}) {
      text-align: left;
    }
  }

  p {
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  display: none;

  svg {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: ${styles.breakpoints.md}) {
    display: block;
    svg {
      width: 100%;
      height: 30rem;
    }
  }
`;
