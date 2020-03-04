import { DefaultTheme } from 'styled-components';
import { lighten, darken } from 'polished';

type ColorRange = {
  light?: string;
  medium?: string;
  dark?: string;
  darker?: string;
  [key: string]: string | ColorRange;
}

type FontSpec = {
  family?: string;
  size?: string;
  weight?: string;
}

export interface BaseTheme extends DefaultTheme {
  color?: {
    background?: ColorRange;
    text?: ColorRange;
    area?: ColorRange;
  };
  font?: {
    [key: string]: FontSpec;
  };
  shadow?: { [key: string]: string };
  border?: { [key: string]: string };
  ws?: { [key: string]: string };
}

enum FONT {
  SANS = '"Open Sans", sans-serif',
  MONO = '"Roboto Mono", monospace',
}

enum WEIGHT {
  LIGHT = '300',
  MEDIUM = '400',
  BOLD = '600',
}

export enum VARIANT {
  BASE = 'base',
  INFO = 'info',
  POSITIVE = 'positive',
  PRIMARY = 'positive',
  NEGATIVE = 'negative',
  SECONDARY = 'base',
  DANGER = 'negative',
  DEFAULT = 'base',
  LIGHT = 'light',
  DARK = 'dark',
}

const WHITE = '#fefefe';
const BLACK = '#181818';

const MarkOneTheme: BaseTheme = {
  color: {
    background: {
      light: WHITE,
      subtle: darken(0.07, WHITE),
      medium: darken(0.175, WHITE),
      dark: '#93a1ad',
      darker: darken(0.75, WHITE),
      accent: '#a51c30',
      base: {
        light: WHITE,
        medium: darken(0.175, WHITE),
        dark: '#93a1ad',
        text: BLACK,
      },
      info: {
        light: '#95b5df',
        medium: '#4e88c7',
        dark: '#084161',
        text: WHITE,
      },
      positive: {
        light: '#81e981',
        medium: '#4db848',
        dark: '#178717',
        text: WHITE,
      },
      negative: {
        light: '#ff8f9c',
        medium: '#ff4040',
        dark: '#ed1b2a',
        text: WHITE,
      },
    },
    text: {
      base: BLACK,
      light: lighten(0.9, BLACK),
      medium: lighten(0.35, BLACK),
      dark: BLACK,
      info: '#4e88c7',
      positive: '#4db848',
      negative: '#ff4040',
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
      matme: '#b18cbb',
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
      weight: WEIGHT.BOLD,
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
