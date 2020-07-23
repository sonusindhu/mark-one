import { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

interface ModalBodyProps {
  /**
   * the content of the Modal Body
   */
  children: ReactNode;
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
