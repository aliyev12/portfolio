export const colors = {
  mainWhite: 'white',
  mainBlack: '#333333',
  mainBlue: '#4a86ff',
  mainBlue__light: '#4a86ff33',
  mainBlue__dark: '#4a86ffbf',
  lightGrey: '#f2f2f2',
  darkGrey: '#4d4d4d',
  formBorderGrey__light: 'rgba(0, 0, 0, 0.4)',
  formBorderGrey__dark: 'rgba(255, 255, 255, 0.6)',
  successGreen__light: 'rgb(237, 247, 237)',
  successGreen__dark: 'rgb(2, 100, 2)',
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
  xs: '400px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1400px',
};

export const boxShadow = {
  dark: `
  0px 2px 4px -1px rgba(255,255,255, 0.2),
  0px 4px 5px 0px rgba(255,255,255, 0.14), 
  0px 1px 10px 0px rgba(255,255,255, 0.12)
  `,
  light: `
  0px 2px 4px -1px rgba(51,51,51, 0.2),
  0px 4px 5px 0px rgba(51,51,51, 0.14), 
  0px 1px 10px 0px rgba(51,51,51, 0.12)
`,
};
