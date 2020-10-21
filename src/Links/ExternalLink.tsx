import styled from 'styled-components';
import { fromTheme, VARIANT } from '../Theme';

/**
 * A default <a> element with styles mirroring the Link component
 */
export default styled.a`
  text-decoration: none;
  color: ${fromTheme('color', 'background', VARIANT.INFO, 'medium')};
  &:hover {
    text-decoration: underline;
    color: ${fromTheme('color', 'background', VARIANT.INFO, 'dark')};
  }
  &:visited {
    text-decoration: none;
    color: ${fromTheme('color', 'background', VARIANT.INFO, 'medium')};
  }
`;
