import { DefaultTheme } from 'styled-components';

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

const MarkOneTheme: BaseTheme = {
  color: {
    background: {
      light: '#ffffff',
      subtle: '#f6f6f6',
      medium: '#d2d2d2',
      dark: '#909090',
      darker: '#404040',
      accent: '#903030',
    },
  },
};

export default MarkOneTheme;
