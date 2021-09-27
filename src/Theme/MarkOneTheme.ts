import { DefaultTheme } from 'styled-components';
import { lighten, darken } from 'polished';

enum FONT {
  SANS = '"Open Sans", sans-serif',
  MONO = '"Roboto Mono", monospace',
}

enum WEIGHT {
  LIGHT = '300',
  MEDIUM = '400',
  BOLD = '600',
}

const WHITE = '#fefefe';
const BLACK = '#181818';

const MarkOneTheme: DefaultTheme = {
  color: {
    background: {
      light: WHITE,
      subtle: '#f2f2f2',
      medium: '#e8e8e8',
      dark: '#93a1ad',
      darker: darken(0.75, WHITE),
      accent: '#a51c30',
      base: {
        light: WHITE,
        medium: darken(0.175, WHITE),
        dark: '#93a1ad',
      },
      info: {
        light: '#95b5df',
        medium: '#4e88c7',
        dark: '#084161',
      },
      positive: {
        light: '#81e981',
        medium: '#4db848',
        dark: '#178717',
      },
      negative: {
        light: '#ff8f9c',
        medium: '#ff4040',
        dark: '#ed1b2a',
      },
    },
    text: {
      base: BLACK,
      light: lighten(0.9, BLACK),
      medium: '#575757',
      dark: BLACK,
      info: '#4e88c7',
      positive: '#4db848',
      negative: '#bd0f24',
    },
    area: {
      acs: '#da373e',
      am: '#4eadab',
      ap: '#cedb51',
      be: '#f0b643',
      cs: '#6797db',
      ee: '#f9df57',
      ese: '#75c3d5',
      general: '#95b5df',
      'mat & me': '#b18cbb',
      mde: '#c0c0c0',
      msmba: '#946eb7',
      sem: '#ec8f9c',
    },
  },
  font: {
    base: {
      family: FONT.SANS,
      size: '16px',
      weight: WEIGHT.MEDIUM,
    },
    body: {
      family: FONT.SANS,
      size: '1em',
      weight: WEIGHT.MEDIUM,
    },
    data: {
      family: FONT.MONO,
      size: '0.9em',
      weight: WEIGHT.MEDIUM,
    },
    note: {
      family: FONT.SANS,
      size: '0.8em',
      weight: WEIGHT.MEDIUM,
      color: lighten(0.35, BLACK),
    },
    bold: {
      family: FONT.SANS,
      size: '1em',
      weight: WEIGHT.BOLD,
    },
    title: {
      family: FONT.SANS,
      size: '1.66em',
      weight: WEIGHT.MEDIUM,
      color: lighten(0.35, BLACK),
    },
    heading: {
      family: FONT.SANS,
      size: '1.33em',
      weight: WEIGHT.LIGHT,
    },
    error: {
      family: FONT.SANS,
      size: '0.7em',
      weight: WEIGHT.BOLD,
    },
  },
  shadow: {
    xlight: '0 2px 4px rgba(0,0,0,0.24)',
    light: '0 4px 8px rgba(0,0,0,0.28)',
    medium: '0 4px 16px 2px rgba(0,0,0,0.24)',
  },
  border: {
    hairline: `1px solid ${BLACK}`,
    light: `2px solid ${lighten(0.5, BLACK)}`,
    heavy: `6px solid ${lighten(0.3, BLACK)}`,
  },
  ws: {
    zero: '0px',
    xsmall: '5px',
    small: '10px',
    medium: '15px',
    large: '25px',
    xlarge: '40px',
  },
};

export default MarkOneTheme;
