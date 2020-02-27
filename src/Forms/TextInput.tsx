import React, {
  ReactElement,
  useContext,
  ChangeEventHandler, FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';
import ValidationErrorMessage from './ValidationErrorMessage';

export interface TextInputProps {
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** The id of the text input field */
  id: string;
  /** The name of the text input field */
  name: string;
  /** The placeholder value of the input field */
  placeholder?: string;
  /** Specifies the type of input */
  type?: string;
  /** The current value in the text input field */
  value: string;
  /** The body of the error message, if applicable */
  errorMessage?: string;
}

const StyledTextInput = styled.input`
    border: ${({ theme }): string => (theme.border.light)};
    display: block;
    height: 20px;
    width: 100%;
`;

const TextInput: FunctionComponent<TextInputProps> = (props): ReactElement => {
  const {
    onChange,
    id,
    type,
    name,
    placeholder,
    value,
    errorMessage,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <>
      <label htmlFor={id}>
        <StyledTextInput
          onChange={onChange}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          theme={theme}
          value={value}
        />
      </label>
      <ValidationErrorMessage>
        {errorMessage}
      </ValidationErrorMessage>
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
