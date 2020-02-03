import { ReactElement, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface HeaderProps {
  /**
   * Allows for applying a custom background color
   * @default "transparent"
   * */
  background?: string;
  /** The elements to be displayed inside the Header */
  children: ReactNode;
  /**
   * Pass in a custom value for justify-content
   * @default space-between
   * */
  justify?: string;
  /** the app theme */
  theme: BaseTheme;
}

/**
 * A full-width header to be displayed at the top of the page
 */

const Header = styled.header<HeaderProps>`
  align-items: flex-end;
  background-color: ${({ background }): string => background};
  box-shadow: ${({ theme }): string => theme.shadow.light};
  display: flex;
  justify-content: ${({ justify }): string => justify};
  padding: ${({ theme }): string => `${theme.ws.medium} ${theme.ws.small}`};
  width: 100%;
`;

Header.defaultProps = {
  background: 'transparent',
  justify: 'space-between',
};

declare type Header = ReactElement<HeaderProps>;
export default withTheme(Header);
