import { ReactElement, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

interface ModalFooterProps {
  /**
   * the content of the Modal Footer
   */
  children: ReactNode;
}


const styledModalFooter = styled.div<ModalFooterProps>`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.ws.small} ${theme.ws.medium}`};
  width: 100%;
`;

declare type ModalFooter = ReactElement<ModalFooterProps>;

/**
 * @component ModalFooter
 * Used within the [[Modal]] component to render a separated bottom section,
 * typically containing buttons for save, cancel, etc.
 */
export const ModalFooter = withTheme(styledModalFooter);
export default ModalFooter;
