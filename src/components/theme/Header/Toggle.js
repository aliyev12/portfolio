import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';

const ToggleBtn = styled(IconButton)`
  svg {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleBtn aria-label="toggle" onClick={toggleTheme}>
      {isLight ? <Brightness2RoundedIcon id="test" /> : <WbSunnyRoundedIcon />}
    </ToggleBtn>
  );
};

export default Toggle;
