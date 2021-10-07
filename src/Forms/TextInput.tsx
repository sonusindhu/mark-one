import React, {
  ReactElement,
  useContext,
  ChangeEventHandler,
  FunctionComponent,
  Ref,
  MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import ValidationErrorMessage from './ValidationErrorMessage';
import InputLabel, { InputLabelPosition, POSITION } from './InputLabel';

export interface TextInputProps {
  /** The id of the label tied to this text input field */
  id: string;
  /** Specifies the label text */
  label: string;
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** Function to call on click event */
  onClick?: MouseEventHandler;
  /** The name of the text input field */
  name: string;
  /** The placeholder value of the input field */
  placeholder?: string;
  /** Specifies the type of input */
  type?: string;
  /** The current value in the text input field */
  value: string;
  /** Specifies the size of the font for the text in the input field */
  fontSize?: string;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** If true, text input field will be disabled */
  disabled?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: InputLabelPosition;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, the input for the text field is required to submit the form */
  isRequired?: boolean;
  /** Specifies the ref of the text input */
  forwardRef?: Ref<HTMLInputElement>;
  /** If true, omit the margin style in label */
  hideError?: boolean;
}

export const StyledTextInput = styled.input<TextInputProps>`
  border: ${fromTheme('border', 'hairline')};
  width: 100%;
  padding: ${fromTheme('ws', 'xsmall')};
  padding-right: ${fromTheme('ws', 'zero')};
  grid-area: i;
`;

/**
 * A text input component that incorporates a styled label, styled label text,
 * and an error message component
 */
const TextInput: FunctionComponent<TextInputProps> = (props): ReactElement => {
  const {
    id,
    onChange,
    onClick,
    type,
    name,
    placeholder,
    value,
    errorMessage,
    disabled,
    label,
    labelPosition,
    isLabelVisible,
    isRequired,
    forwardRef,
    hideError,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <InputLabel
      htmlFor={id}
      label={label}
      labelPosition={labelPosition}
      isLabelVisible={isLabelVisible}
      isRequired={isRequired}
      hideError={hideError}
    >
      <StyledTextInput
        onChange={onChange}
        onClick={onClick}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        theme={theme}
        value={value}
        disabled={disabled}
        label={label}
        aria-errormessage={`${id}-error`}
        aria-invalid={errorMessage ? true : null}
        aria-required={isRequired}
        required={isRequired}
        ref={forwardRef}
      />
      {errorMessage && !hideError
      && (
        <ValidationErrorMessage id={`${id}-error`}>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </InputLabel>
  );
};

TextInput.defaultProps = {
  type: 'text',
  disabled: false,
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  hideError: false,
};

/** @component */
export default TextInput;
