import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import { styles } from 'utils';
import logos from './texhStackLogos';

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

const Chips = ({ specialClass, stack }) => (
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

export default Chips;
