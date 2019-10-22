import { DefaultTheme } from 'styled-components';

export interface BaseTheme extends DefaultTheme {
  color?: {
    background?: {
      [key: string]: string
      | {
        light: string;
        dark: string;
      };
    };
    text?: { [key: string]: string };
  };
  font?: {
    family?: { [key: string]: string };
    size?: { [key: string]: string };
    weight?: { [key: string]: string };
  };
  shadow?: { [key: string]: string };
  border?: { [key: string]: string };
  spacing?: { [key: string]: string };
}

const Theme: BaseTheme = {
  color: {
    background: {
      light: '#ffffff',
      subtle: 'rgba(180,180,180,0.1)',
      medium: 'rgb(210,210,210)',
      dark: 'rgb(144,144,144)',
      darker: 'rgb(64,64,64)',
      accent: 'rbg(144,48,48)',
    },
  },
};

export default Theme;
