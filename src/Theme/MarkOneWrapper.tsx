import React, {
  ReactElement, ReactNode, FunctionComponent,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalCSS, MarkOneTheme } from 'mark-one';

export interface ThemeWrapperProps {
  /** The content of the app that should receive the theme */
  children: ReactNode;
}

/**
 * Provides the Mark One Theme to all child components. This should be added at
 * the top level of the application, and then any child component that needs to
 * use the theme should include the `useContext()` hook to grab it. e.g.:
 *
 * ```jsx
 * import React, { useContext, SFC, ReactElement } from 'react';
 * import styled, { ThemeContext } from 'styled-components';
 * import { BaseTheme } from 'mark-one';
 *
 * const TestComponent: SFC = (): ReactElement => {
 *   const theme: BaseTheme = useContext(ThemeContext);
 *
 *   const DarkBackgroundDiv = styled.div`
 *     background: ${({theme}) => theme.color.background.dark};
 *   `
 *
 *   return (
 *     <DarkBackgroundDiv>
 *       This will have a dark background.
 *     </DarkBackgroundDiv>
 *   )
 *
 * };
 *
 * export default TestComponent;
 * ```
 */

const MarkOneWrapper: FunctionComponent<ThemeWrapperProps> = ({
  children,
}): ReactElement => (
  <ThemeProvider theme={MarkOneTheme}>
    <>
      <GlobalCSS />
      {children}
    </>
  </ThemeProvider>
);

export default MarkOneWrapper;
