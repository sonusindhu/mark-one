import React, {
  ReactElement,
  FunctionComponent,
  ChangeEventHandler,
  useContext,
  Ref,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import CheckLabel, { CheckLabelPosition } from './CheckLabel';
import { POSITION } from './InputLabel';

interface NativeRadioButtonProps {
  /** The id tied to the radio button */
  id?: string;
  /** The name of the radio button */
  name: string;
  /** The value of the radio button */
  value: string;
  /** Specifies the label text */
  label: string;
  /** If true, radio button will be disabled */
  disabled?: boolean;
  /** Specifies whether button is checked */
  checked?: boolean;
  /** Function to call on change event */
  onChange?: ChangeEventHandler;
}

export interface RadioButtonProps extends NativeRadioButtonProps {
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: CheckLabelPosition;
  /** If true, the radio button is required to submit the form */
  isRequired?: boolean;
  /** Specifies the ref of the radio button */
  forwardRef?: Ref<HTMLInputElement>;
}

interface CustomRadioButtonProps {
  /** Specifies whether button is checked */
  checked?: boolean;
  /** If true, radio button will be disabled */
  disabled?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: CheckLabelPosition;
}

interface SelectMarkProps {
  /** Specifies whether button is checked */
  checked?: boolean;
  /** If true, radio button will be disabled */
  disabled?: boolean;
}

const SelectMark = styled.span<SelectMarkProps>`
  border: ${({ theme, disabled }): string => (
    disabled
      ? `6px solid ${theme.color.text.medium}`
      : `6px solid ${theme.color.text.base}`
  )};
  border-radius: 50%;
  position: absolute;
  transition: opacity 0.2s ease-in-out;
  align-self: center;
  justify-self: center;
`;

const SelectMarkContainer = styled.span`
  position: absolute;
  display: grid;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const CustomRadioButton = styled.span<CustomRadioButtonProps>`
  display: inline-block;
  grid-area: i;
  height: 1.25em;
  width: 1.25em;
  border: ${({ theme, disabled }): string => (
    disabled
      ? `${theme.border.light}`
      : `2px solid ${theme.color.text.base}`
  )};
  border-radius: 50%;
  margin-right: ${fromTheme('ws', 'xsmall')};
  align-self: center;
  cursor: ${({ disabled }): string => (
    disabled
      ? 'default'
      : 'pointer'
  )};
  box-shadow: ${({ checked, theme }): string => checked && `0 0px 10px ${theme.color.background.darker}`};
  justify-self: ${({ labelPosition }): string => (
    labelPosition === POSITION.RIGHT
      ? 'end'
      : 'start'
  )};
  position: relative;
`;

const NativeRadioButton = styled.input<NativeRadioButtonProps>`
  opacity: 0;
  height: 0;
  width: 0;
`;

const RadioButton: FunctionComponent<RadioButtonProps> = (props):
ReactElement => {
  const {
    id,
    value,
    name,
    label,
    labelPosition,
    checked,
    disabled,
    onChange,
    isRequired,
    forwardRef,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <>
      <CheckLabel
        htmlFor={id}
        label={label}
        labelPosition={labelPosition}
        isRequired={isRequired}
        disabled={disabled}
      >
        <NativeRadioButton
          type="radio"
          id={id}
          label={label}
          value={value}
          name={name}
          onChange={onChange}
          aria-required={isRequired}
          ref={forwardRef}
          theme={theme}
          checked={checked}
          disabled={disabled}
        />
        <CustomRadioButton
          role="radio"
          labelPosition={labelPosition}
          checked={checked}
          disabled={disabled}
        >
          {checked
          && (
            <SelectMarkContainer>
              <SelectMark
                disabled={disabled}
              />
            </SelectMarkContainer>
          )}
        </CustomRadioButton>
      </CheckLabel>
    </>
  );
};

RadioButton.defaultProps = {
  labelPosition: POSITION.RIGHT,
};

/** @component */
export default RadioButton;
