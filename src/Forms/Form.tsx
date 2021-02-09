import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';

export interface FormProps {
  /** Text or form components to be displayed */
  children: ReactNode;
  /** The id of the form */
  id?: string;
  /** The test id of the form */
  dataTestId?: string;
}

const StyledForm = styled.form<FormProps>`
  & > * {
    margin: ${fromTheme('ws', 'small')};
  }
  cursor: pointer;
`;

const Form: FunctionComponent<FormProps> = (props): ReactElement => {
  const {
    id,
    dataTestId,
    children,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledForm
      id={id}
      data-testid={dataTestId}
      theme={theme}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
