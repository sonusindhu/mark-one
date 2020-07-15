import React, {
  ReactNode, FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';

export interface ValidationErrorMessageProps {
  /** Text or components to be displayed */
  children: ReactNode;
}

const StyledValidationErrorMessage = styled.span`
  color: ${({ theme }): string => (theme.color.text.negative)};
  font-family: ${({ theme }): string => (theme.font.error.family)};
  font-size: ${({ theme }): string => (theme.font.error.size)};
  font-weight: ${({ theme }): string => (theme.font.error.weight)};
  grid-area: e;
`;

const ValidationErrorMessage:
FunctionComponent<ValidationErrorMessageProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledValidationErrorMessage
      theme={theme}
      role="alert"
      aria-live="assertive"
    >
      {children}
    </StyledValidationErrorMessage>
  );
};

export default ValidationErrorMessage;
