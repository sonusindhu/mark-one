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
  /** A label that specifies the purpose of the form */
  label: string;
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
    label,
    children,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledForm
      id={id}
      aria-label={label}
      theme={theme}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
