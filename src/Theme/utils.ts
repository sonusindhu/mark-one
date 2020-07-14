import { DefaultTheme } from 'styled-components';

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

export const fromTheme = (...levels: string[]) => (
  ({ theme }: { theme: DefaultTheme }): string => {
    const propList = [...levels];
    let currentLevel = theme;
    while (propList.length > 0) {
      const nextLevel = propList.shift();
      if (nextLevel in currentLevel) {
        if (typeof currentLevel[nextLevel] === 'string') {
          return currentLevel[nextLevel] as string;
        }
        currentLevel = currentLevel[nextLevel] as Record<string, unknown>;
      } else {
        break;
      }
    }
    return null;
  });
