import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react';

export interface FormProps {
  /** Text or form components to be displayed */
  children: ReactNode;
  /** The id of the form */
  id?: string;
}

const Form: FunctionComponent<FormProps> = (props): ReactElement => {
  const {
    id,
    children,
  } = props;
  return (
    <form
      id={id}
    >
      {children}
    </form>
  );
};

export default Form;
