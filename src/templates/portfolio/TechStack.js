import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { styles } from 'utils';
import logos from './texhStackLogos';

const TechWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.body} !important;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) => theme.boxShadow} !important;
  padding: 1rem 2rem;

  .title {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
    margin-top: 1rem;
  }

  .logos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    border-radius: 1rem;
    margin: 2rem 0;
    padding: 1rem;

    img {
      margin: 0 1rem;
      width: ;
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
    .logos-container {
      flex-wrap: nowrap;

      img {
      }
    }
  }
`;

const TechStack = ({ techStack }) => {
  let totalWidth = 0;
  const fittingLogoKyes = [];
  [...techStack, ...techStack, ...techStack, ...techStack].forEach(logoKey => {
    if (totalWidth < 700) {
      fittingLogoKyes.push(logoKey);
      totalWidth = totalWidth + logos[logoKey].width;
    }
  });

  return (
    <TechWrapper>
      <StyledPaper elevation={3}>
        <div className="title">Tech Stack</div>
        <div className="logos-container">
          {fittingLogoKyes.map(logoKey => (
            <img
              key={logoKey}
              src={logos[logoKey].img}
              alt={logos[logoKey].alt}
              title={logos[logoKey].alt}
              width={logos[logoKey].width}
            />
          ))}
        </div>
        <div className="chips-container">
          {fittingLogoKyes.map(logoKey => (
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
        </div>
      </StyledPaper>
    </TechWrapper>
  );
};

export default TechStack;
