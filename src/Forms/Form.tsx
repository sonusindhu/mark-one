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
  /** The test id of the form */
  dataTestId?: string;
}

const Form: FunctionComponent<FormProps> = (props): ReactElement => {
  const {
    id,
    dataTestId,
    children,
  } = props;
  return (
    <form
      id={id}
      data-testid={dataTestId}
      theme={theme}
    >
      {children}
    </form>
  );
};

export default Form;
