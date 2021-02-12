import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

export interface FormProps {
  /** The id of the form */
  id?: string;
  /** A label that specifies the purpose of the form */
  label: string;
}

const Form: FunctionComponent<FormProps> = styled.form.attrs(
  (props: FormProps) => ({
    id: props.id,
    'aria-label': props.label,
  })
)`
  & > * {
    margin: ${fromTheme('ws', 'small')};
  }
`;

export default Form;
