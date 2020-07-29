import React, {
  ReactElement,
  FunctionComponent,
  ChangeEventHandler,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import Label, { POSITION } from './Label';

interface NativeRadioButtonProps {
  /** The id tied to the radio button */
  id?: string;
  /** The name of the radio button */
  name: string;
  /** The value of the radio button */
  value: string;
  /** Specifies the label text */
  label: string;
  /** Specifies whether button is checked */
  checked?: boolean;
  /** Function to call on change event */
  onChange?: ChangeEventHandler;
}

export interface RadioButtonProps extends NativeRadioButtonProps {
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** If true, the radio button is required to submit the form */
  isRequired?: boolean;
}

interface CustomRadioButtonProps {
  /** Specifies whether button is checked */
  checked?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
}

interface SelectMarkProps {
  /** Specifies whether button is checked */
  checked?: boolean;
}

const SelectMark = styled.span<SelectMarkProps>`
  border: ${({ theme }): string => `6px solid ${theme.color.text.base}`};
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
  border: ${({ theme }): string => `2px solid ${theme.color.text.base}`};
  border-radius: 50%;
  margin-right: ${fromTheme('ws', 'xsmall')};
  align-self: center;
  cursor: pointer;
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
    onChange,
    isRequired,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <>
      <Label
        htmlFor={id}
        label={label}
        labelPosition={labelPosition}
        isRequired={isRequired}
      >
        <NativeRadioButton
          type="radio"
          id={id}
          label={label}
          value={value}
          name={name}
          onChange={onChange}
          aria-required={isRequired}
          theme={theme}
        />
        <CustomRadioButton
          labelPosition={labelPosition}
          checked={checked}
        >
          {checked
          && (
            <SelectMarkContainer>
              <SelectMark />
            </SelectMarkContainer>
          )}
        </CustomRadioButton>
      </Label>
    </>
  );
};

RadioButton.defaultProps = {
  labelPosition: POSITION.RIGHT,
};

/** @component */
export default RadioButton;
