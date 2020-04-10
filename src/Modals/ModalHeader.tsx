import React, {
  ReactElement,
  ReactNode,
  FunctionComponent,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BorderlessButton } from '../Buttons';
import { VARIANT, BaseTheme } from '../Theme';
import { SectionHeading } from '../Headings';

interface ModalHeaderProps {
  /**
   * the Title to display in the Modal Header
   */
  children: ReactNode;
  /**
   * A handler to pass to the close button. If omitted, no close button will be
   * rendered
   */
  closeButtonHandler?: () => void;
}

const ModalTitle = styled(SectionHeading)`
  border-bottom: none;
`;

const StyledModalHeader = styled.div<{theme: BaseTheme}>`
  background-color: ${({ theme }): string => (theme.color.background.subtle)};
  border-bottom: ${({ theme }): string => (theme.border.light)};
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): string => `${theme.ws.small} ${theme.ws.medium}`};
  width: 100%;
`;

/**
 * @component ModalHeader
 * Utility subcomponent for the [[Modal]]. Adds a title bar with the child text
 * in an `<h2>` tag. If an optional `closeButtonHandler` is included, will also
 * render a `X` close button.
 */
declare type ModalHeader = ReactElement<ModalHeaderProps>;
const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
  closeButtonHandler,
  children,
}): ReactElement<ModalHeaderProps> => {
  const markOneTheme = useContext(ThemeContext);
  return (
    <StyledModalHeader
      theme={markOneTheme}
    >
      <ModalTitle>
        {children}
      </ModalTitle>
      {closeButtonHandler
      && (
        <BorderlessButton
          variant={VARIANT.NEGATIVE}
          onClick={closeButtonHandler}
        >
          <FontAwesomeIcon
            title="Close Modal"
            icon={faTimes}
          />
        </BorderlessButton>
      )}
    </StyledModalHeader>
  );
};
export default ModalHeader;
