import { ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface LogoProps {
  /**
  * The text of the link, which will not display on screeen but will render
  * to the DOM for screen-reader compatibility
  * */
  children: string;
  /**
  * The height at which the image should be displayed
  * @default 75px
  */
  height?: string;
  /** The destination to which the logo should be linked */
  href?: string;
  /** the url for the image to be displayed */
  image?: string;
  /** The application theme */
  theme: BaseTheme;
  /**
   * The width at which the image should be displayed
   * @default 200px
   */
  width?: string;
}

/**
 * @component Logo
 * A linked logo, suitable for use in the header
 */

const Logo = styled.a<LogoProps>`
  align-self: stretch;
  background-image: url(${({ image }): string => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  color: transparent;
  display: inline-block;
  font-size: 0;
  line-height: 0;
  margin: ${({ theme }): string => `${theme.ws.zero} ${theme.ws.small}`};
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
`;

Logo.defaultProps = {
  href: '',
  image: '',
  width: '175px',
  height: '50px',
};

declare type Logo = ReactElement<LogoProps>;
export default withTheme(Logo);
