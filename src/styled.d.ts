import 'styled-components';

declare module 'styled-components' {

  type ColorRange = {
    light?: string;
    medium?: string;
    dark?: string;
    darker?: string;
  };

  type FontSpec = {
    family?: string;
    size?: string;
    weight?: string;
    color?: string;
  };

  export interface DefaultTheme {
    color?: {
      background?: {
        light?: string;
        subtle?: string;
        medium?: string;
        dark?: string;
        darker?: string;
        accent?: string;
        base?: ColorRange;
        info?: ColorRange;
        positive?: ColorRange;
        negative?: ColorRange;
      };
      text?: {
        base?: string;
        light?: string;
        medium?: string;
        dark?: string;
        info?: string;
        positive?: string;
        negative?: string;
      };
      area?: {
        [key: string]: string;
      };
    };
    font?: {
      [key: string]: FontSpec;
    };
    shadow?: { [key: string]: string };
    border?: { [key: string]: string };
    ws?: { [key: string]: string };
  }

}
