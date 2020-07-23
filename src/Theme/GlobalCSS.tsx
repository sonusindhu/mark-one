import { createGlobalStyle } from 'styled-components';
import '@openfonts/open-sans_all';
import '@openfonts/roboto-mono_all';
import { fromTheme } from './utils';

/**
 * Creates a global stylesheet that will apply to all sub-components,
 * augmenting any locally defined styles. It applies some minor style resets,
 * setting margins/padding to 0 and box-sizing to "border-box" for consistency,
 * and also sets things like the base background color, base font size, etc.
 *
 * For convenience, this component is added as part of the [[MarkOneWrapper]],
 * which injects the [[MarkOneTheme]]. To override the base styles in an
 * application, you can simply create a second stylesheet and add it inside the
 * MarkOneWrapper.
 *
 * ```jsx
 * import React, { ReactElement } from 'react';
 * import styled, { createGlobalStyle } from 'styled-components';
 * import { MarkOneWrapper } from 'mark-one';
 *
 * const NewGlobalCSS = createGlobalStyle`
 *   html, body {
 *     font-size: 20px;
 *   }
 * `
 *
 * const App: FunctionComponent = (): ReactElement => (
 *   <MarkOneWrapper>
 *     <NewGlobalCSS />
 *     {{ rest of the application }}
 *   </MarkOneWrapper>
 * )
 *
 * ```
 */

export default createGlobalStyle`
   html, body {
    background: ${fromTheme('color', 'background', 'light')};
    box-sizing: border-box;
    color: ${fromTheme('color', 'text', 'dark')} ;
    font-family: ${fromTheme('font', 'base', 'family')};
    font-size: ${fromTheme('font', 'base', 'size')};
    font-weight: ${fromTheme('font', 'base', 'weight')};
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
 }
*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
