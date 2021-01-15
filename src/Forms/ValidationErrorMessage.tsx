import React, {
  ReactNode, FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';

export interface ValidationErrorMessageProps {
  /** Text or components to be displayed */
  children: ReactNode;
  /** An html id used by the parent Input component to associate the error */
  id?: string;
}

const StyledValidationErrorMessage = styled.span`
  color: ${fromTheme('color', 'text', 'negative')};
  font-family: ${fromTheme('font', 'error', 'family')};
  font-size: ${fromTheme('font', 'error', 'size')};
  font-weight: ${fromTheme('font', 'error', 'weight')};
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
