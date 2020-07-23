import 'styled-components';
import { VARIANT } from './Theme/utils';

declare module 'styled-components' {

  type ColorRange = {
    light: string;
    medium: string;
    subtle?: string;
    dark: string;
    darker?: string;
    accent?: string;
  };

  type FontSpec = {
    family?: string;
    size?: string;
    weight?: string;
    color?: string;
  };

  type AcademicArea = 'acs' |
  'am' |
  'ap' |
  'be' |
  'cs' |
  'ee' |
  'ese' |
  'general' |
  'mat & me' |
  'mde' |
  'msmba' |
  'sem';

  type ColorCategory = 'background' | 'text' | 'area';

  type FontCategory = 'base' |
  'body' |
  'data' |
  'note' |
  'bold' |
  'title'|
  'heading' |
  'error';

  type WhiteSpaceSize = 'zero' |
  'xsmall' |
  'small' |
  'medium' |
  'large' |
  'xlarge';

  type BorderWeight = 'hairline' | 'light' | 'heavy';

  type ShadowWeight = 'xlight' | 'light' | 'medium';

  type TextColors = 'base' |
  'light' |
  'medium' |
  'dark' |
  'info' |
  'positive' |
  'negative';

  export interface DefaultTheme {
    color: {
      background:{
        [K in VARIANT | keyof ColorRange]:
        K extends VARIANT
          ? ColorRange
          : string;
      }
      text: {
        [key in TextColors]: string;
      };
      area: {
        [key in AcademicArea]: string;
      };
    };
    font: {
      [key in FontCategory]: FontSpec;
    };
    shadow: {
      [key in ShadowWeight]: string
    };
    border: {
      [key in BorderWeight]: string
    };
    ws: {
      [key in WhiteSpaceSize]: string
    };
  }

  export type ValidThemeValues = keyof DefaultTheme |
  keyof ColorRange |
  keyof FontSpec |
  AcademicArea |
  ColorCategory |
  FontCategory |
  ShadowWeight |
  BorderWeight |
  WhiteSpaceSize |
  TextColors |
  VARIANT;
}
