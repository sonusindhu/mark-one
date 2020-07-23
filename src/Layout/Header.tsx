import { ReactElement, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

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
}

/**
 * A full-width header to be displayed at the top of the page
 */

const Header = styled.header<HeaderProps>`
  align-items: baseline;
  background-color: ${({ background }) => background};
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: ${({ theme }) => `${theme.ws.medium} ${theme.ws.small}`};
  width: 100%;
`;

Header.defaultProps = {
  background: 'transparent',
  justify: 'space-between',
};

declare type Header = ReactElement<HeaderProps>;
export default withTheme(Header);
