import { DefaultTheme } from 'styled-components';
import {
  ColorRange,
  TextColors,
  AcademicArea,
  FontCategory,
  ShadowWeight,
  BorderWeight,
  WhiteSpaceSize,
  FontSpec,
  ColorCategory,
} from './ThemeTypes';

type ValidThemeValues = keyof DefaultTheme |
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

/**
 * Recursively get a value from the theme object, or return null if the value
 * either doesn't exist, or doesn't refer to a string value.
 *
 * Uses a typescript generic function to update the type as it recurses
 */

function getRecursiveProp<T>(
  theme: T,
  key: Extract<ValidThemeValues, keyof T>,
  next?: ValidThemeValues[]
): string {
  const nextValue = theme[key];
  if (next.length > 0) {
    const thirdLevel = next.shift();
    return getRecursiveProp<typeof nextValue>(
      nextValue,
      thirdLevel as Extract<ValidThemeValues, keyof typeof nextValue>,
      next
    );
  }
  if (typeof nextValue === 'string') {
    return nextValue;
  }
  return null;
}

/**
 * Helper function that returns a function that extracts values from the theme.
 * Allows passing multiple strings as props to dig into nested values, but can
 * only descend four levels into the theme.
 *
 * This is intended for use in styled-components's interpolation functions as
 * an easier way to get properly typed values. Examples:
 *
 * instead of:
 *
 * ```
 * styled.div`
 *   background-color: ${({ theme }) => theme.background.info.dark};
 * ```
 * `
 *
 * use instead:
 *
 * ```
 * styled.div`
 *   background-color: ${fromTheme('background','info', 'dark')}
 * ```
 */
//
// Disabling rule since our theme object can go four deep
// eslint-disable-next-line max-params
export function fromTheme
<
  T extends DefaultTheme,
  K extends Extract<ValidThemeValues, keyof T>,
  N extends Extract<ValidThemeValues, keyof T[K]>,
  M extends Extract<ValidThemeValues, keyof T[K][N]>,
  L extends Extract<ValidThemeValues, keyof T[K][N][M]>,
>(
  key: K,
  next: N,
  more?: M,
  last?: L
) {
  return ({ theme }: { theme: T }): string => {
    if (more) {
      if (last) {
        return getRecursiveProp(theme, key, [next, more, last]);
      }
      return getRecursiveProp(theme, key, [next, more]);
    }
    return getRecursiveProp(theme, key, [next]);
  };
}

/**
 * A set of enums corresponding to the different colors exposed by the Mark One
 * Theme.
 */
export enum VARIANT {
  BASE = 'base',
  INFO = 'info',
  POSITIVE = 'positive',
  PRIMARY = 'positive',
  NEGATIVE = 'negative',
  SECONDARY = 'base',
  DANGER = 'negative',
  DEFAULT = 'base',
  MEDIUM = 'medium',
}
