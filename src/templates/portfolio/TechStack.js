import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { styles } from 'utils';
import logos from './texhStackLogos';

const leftImgMargin = 10;
const rightImgMargin = leftImgMargin;

const TechWrapper = styled.div`
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

const StyledPaper = styled(Paper)`
  display: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.body} !important;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow} !important;
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

const ChipsWrapper = styled.div`
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
`;

export const Chips = ({ specialClass, stack }) => (
  <ChipsWrapper className={specialClass}>
    {stack.slice(0, 7).map(logoKey => (
      <Chip
        key={`chip-${logoKey}`}
        avatar={<Avatar>{logos[logoKey].alt[0].toUpperCase()}</Avatar>}
        variant="outlined"
        color="primary"
        label={logos[logoKey].alt}
        title={logos[logoKey].alt}
        className="chip"
      />
    ))}
  </ChipsWrapper>
);

const TechStack = ({ techStack }) => {
  return (
    <TechWrapper>
      <StyledPaper elevation={3}>
        <div className="title">Tech Stack</div>
        <div className="logos-container">
          {techStack.slice(0, 7).map(logoKey => (
            <img
              key={logoKey}
              src={logos[logoKey].img}
              alt={logos[logoKey].alt}
              title={logos[logoKey].alt}
              width={logos[logoKey].width}
            />
          ))}
        </div>
        <Chips stack={techStack} />
      </StyledPaper>
      {/* <Chips specialClass="mobile-chips" stack={techStack} /> */}
    </TechWrapper>
  );
};

export default TechStack;
