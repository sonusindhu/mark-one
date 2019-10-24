import { DefaultTheme } from 'styled-components';
import { lighten, darken } from 'polished';

type ColorRange = {
  light?: string;
  medium?: string;
  dark?: string;
  darker?: string;
  [key: string]: string | ColorRange;
}

export interface BaseTheme extends DefaultTheme {
  color?: {
    background?: ColorRange;
    text?: ColorRange;
  };
  font?: {
    [key: string]: {
      family?: string;
      size?: string;
      weight?: string;
    };
  };
  shadow?: { [key: string]: string };
  border?: { [key: string]: string };
  ws?: { [key: string]: string };
}

const COLOR = {
  WHITE: '#ffffff',
  BLACK: '#181818',
  BLUE: '#0c6090',
  GREEN: '#40DE40',
  RED: '#ff4040',
};

const FONT = {
  SANS: '"Open Sans", sans-serif',
  MONO: '"Roboto Mono", monospace',
};

const WEIGHT = {
  LIGHT: '300',
  MEDIUM: '400',
  BOLD: '600',
};

const MarkOneTheme: BaseTheme = {
  color: {
    background: {
      light: COLOR.WHITE,
      subtle: darken(0.03, COLOR.WHITE),
      medium: darken(0.175, COLOR.WHITE),
      dark: darken(0.535, COLOR.WHITE),
      darker: darken(0.75, COLOR.WHITE),
      accent: '#903030',
      info: {
        light: lighten(0.2, COLOR.BLUE),
        medium: COLOR.BLUE,
        dark: darken(0.1, COLOR.BLUE),
      },
      positive: {
        light: lighten(0.15, COLOR.GREEN),
        medium: COLOR.GREEN,
        dark: darken(0.2, COLOR.GREEN),
      },
      negative: {
        light: lighten(0.1, COLOR.RED),
        medium: COLOR.RED,
        dark: darken(0.2, COLOR.RED),
      },
    },
    text: {
      light: lighten(0.9, COLOR.BLACK),
      medium: lighten(0.35, COLOR.BLACK),
      dark: COLOR.BLACK,
      info: COLOR.BLUE,
      positive: COLOR.GREEN,
      negative: COLOR.RED,
    },
  },
  font: {
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
  },
  shadow: {
    xlight: '0 2px 4px rgba(0,0,0,0.24)',
    light: '0 4px 8px rgba(0,0,0,0.28)',
    medium: '0 4px 16px 2px rgba(0,0,0,0.24)',
  },
  border: {
    hairline: `1px solid ${COLOR.BLACK}`,
    light: `2px solid ${lighten(0.5, COLOR.BLACK)}`,
    heavy: `6px solid ${lighten(0.3, COLOR.BLACK)}`,
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
