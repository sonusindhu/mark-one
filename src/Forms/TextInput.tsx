import React, {
  ReactElement,
  useContext,
  ChangeEventHandler,
  FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';
import ValidationErrorMessage from './ValidationErrorMessage';

/** Represents the possible values for TextInput's label positioning */
enum POSITION {
  TOP = 'top',
  LEFT = 'left',
}

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
  /** Specifies the size of the font for the text in the input field */
  fontSize?: string;
  /** The body of the error message, if applicable */
  errorMessage?: string;
  /** Specifies the label text */
  label: string;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, text input field will be disabled */
  disabled?: boolean;
}

const StyledTextInput = styled.input<TextInputProps>`
  border: ${({ theme }): string => (theme.border.light)};
  margin: 2px;
`;

const StyledLabelText = styled.span<{isLabelVisible: boolean}>`
  display: ${({ isLabelVisible }): string => (isLabelVisible ? 'inline' : 'none')};
`;

const StyledLabel = styled.label<{labelPosition: POSITION}>`
  display: flex;
  flex-direction: ${({ labelPosition }): string => (labelPosition === POSITION.TOP ? 'column' : 'row')};
`;

/**
 * A text input component that incorporates a styled label, styled label text,
 * and an error message component
 */
const TextInput: FunctionComponent<TextInputProps> = (props): ReactElement => {
  const {
    onChange,
    id,
    type,
    name,
    placeholder,
    value,
    errorMessage,
    label,
    labelPosition,
    isLabelVisible,
    disabled,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLabel htmlFor={id} labelPosition={labelPosition}>
      <StyledLabelText isLabelVisible={isLabelVisible}>{label}</StyledLabelText>
      <StyledTextInput
        onChange={onChange}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        theme={theme}
        value={value}
        label={label}
        disabled={disabled}
      />
      {errorMessage
      && (
        <ValidationErrorMessage>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </StyledLabel>
  );
};

TextInput.defaultProps = {
  type: 'text',
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  disabled: false,
};

/** @component */
export default TextInput;
