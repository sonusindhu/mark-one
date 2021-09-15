import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme, VARIANT } from '../Theme';

export interface ModalMessageProps {
  /** The id of the modal message */
  id?: string;
  /** Text to be displayed */
  children: string;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const StyledModalMessage = styled.span<ModalMessageProps>`
  background: ${({ theme, variant }) => theme.color.background[variant].medium};
  color: ${({ theme, variant }) => (
    theme.color.text[variant === VARIANT.BASE ? 'dark' : 'light']
  )};
  padding: ${fromTheme('ws', 'small')};
`;

const ModalMessage: FunctionComponent<ModalMessageProps> = (props)
: ReactElement => {
  const {
    id,
    children,
    variant,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledModalMessage
      id={id}
      variant={variant}
      theme={theme}
    >
      {children}
    </StyledModalMessage>
  );
};

export default ModalMessage;
