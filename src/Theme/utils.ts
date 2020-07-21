import { DefaultTheme } from 'styled-components';

/**
 * Recursively get a value from the theme object, or return null if the value
 * either doesn't exist, or doesn't refer to a string value.
 */

function getRecursiveProp<T, K extends keyof T>(
  themeLevel: T,
  nextLevel: K,
  moreLevels?: string[]
): string {
  if (nextLevel in themeLevel) {
    const nextValue = themeLevel[nextLevel];
    if (moreLevels && moreLevels.length > 0) {
      const thirdLevel = moreLevels.shift();
      return getRecursiveProp(nextValue, thirdLevel as keyof T[K], moreLevels);
    }
    if (typeof nextValue === 'string') {
      return nextValue;
    }
  }
  return null;
}

/**
 * Helper function that returns a function that extracts values from the theme.
 * Allows passing multiple strings as props to dig into nested values.
 * This is intended for use in styled-comopnents's interpolation functions as
 * an easier way to get properly typed values. Examples:
 *
 * instead of:
 *
 * styled.div`
 *   margin-top: ${({theme}: {theme: DefaultTheme}):string => theme.ws.xsmall}
 * `
 *
 * use instead:
 *
 * styled.div`
 *   margin-top: ${fromTheme('ws', 'xsmall')}
 */

export const fromTheme = (
  topLevel: keyof DefaultTheme,
  ...nextLevels: string[]
) => (
  ({ theme }: { theme: DefaultTheme }): string => (
    getRecursiveProp(theme, topLevel, nextLevels)
  ));

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
  LIGHT = 'light',
  DARK = 'dark',
}
