export type ColorRange = {
  light: string;
  medium?: string;
  subtle?: string;
  dark: string;
  darker?: string;
  accent?: string;
};

export type FontSpec = {
  family?: string;
  size?: string;
  weight?: string;
  color?: string;
};

export type AcademicArea = 'acs' |
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

export type ColorCategory = 'background' | 'text' | 'area';

export type FontCategory = 'base' |
'body' |
'data' |
'note' |
'bold' |
'title'|
'heading' |
'error';

export type WhiteSpaceSize = 'zero' |
'xsmall' |
'small' |
'medium' |
'large' |
'xlarge';

export type BorderWeight = 'hairline' | 'light' | 'heavy';

export type ShadowWeight = 'xlight' | 'light' | 'medium';

export type TextColors = 'base' |
'light' |
'medium' |
'dark' |
'info' |
'positive' |
'negative';
