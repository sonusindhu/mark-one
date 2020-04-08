import { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';

interface ModalBodyProps {
  /**
   * the content of the Modal Footer
   */
  children: ReactNode;
  /**
   * The MarkOneTheme
   */
  theme: BaseTheme;
}


const StyledModalBody = styled.div<ModalBodyProps>`
  padding: ${({ theme }): string => theme.ws.medium};
`;

/**
 * @component ModalBody
 * Used within the Modal component to provide appropriate spacing in line with
 * the ModalHeader and ModalFooter components.
 */
export default withTheme(StyledModalBody);
