import React, {
  ReactNode, FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';

export interface ValidationErrorMessageProps {
  /** Text or components to be displayed */
  children: ReactNode;
  /** An html id used by the parent Input component to associate the error* */
  id: string;
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
    id,
    children,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledValidationErrorMessage
      id={id}
      theme={theme}
      role="alert"
      aria-live="assertive"
    >
      {children}
    </StyledValidationErrorMessage>
  );
};

export default ValidationErrorMessage;
