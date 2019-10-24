import React, { ReactElement, ReactChildren, FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import MarkOneTheme from './MarkOneTheme';

export interface ThemeWrapperProps {
  /** The content of the app that should receive the theme */
  children: ReactChildren;
}

/**
 * Provides the Mark One Theme to all child components. This should be added at
 * the top level of the application, and then any child component that needs to
 * use the theme should include the `useContext()` hook to grab it. e.g.:
 *
 * ```jsx
 * import { useContext } from 'react';
 * import { ThemeContext }  from 'styled-components';
 * ...
 *   const theme: MarkOneTheme = useContext(ThemeContext);
 * ...
 * ```
 */

const MarkOneWrapper: FunctionComponent<ThemeWrapperProps> = ({
  children,
}): ReactElement => (
  <ThemeProvider theme={MarkOneTheme}>
    <>
      {children}
    </>
  </ThemeProvider>
);

export default MarkOneWrapper;
