export const colors = {
  mainWhite: 'white',
  mainBlack: '#333333',
  mainBlue: '#4a86ff',
  mainBlue__light: '#4a86ff33',
  mainBlue__dark: '#4a86ffbf',
};

export const transition = `all 300ms ease-in`;

export const setTransition = (
  target = 'all',
  time = '300ms',
  timingFunc = 'ease-in'
) => `${target} ${time} ${timingFunc}`;

export const fonts = {
  roboto: `'Roboto', Helvetica, sans-serif`,
};

export const breakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};
