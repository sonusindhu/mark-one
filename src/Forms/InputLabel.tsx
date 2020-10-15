import React, {
  ReactElement,
  useContext,
  FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';

/** An enum that represents the possible values for the label's positioning */
export enum POSITION {
  TOP = 'top',
  LEFT = 'left',
  RIGHT='right',
}

export interface StyledInputLabelProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Specifies the id for the label */
  htmlFor: string;
}

export interface StyledInputLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
}

export interface InputLabelProps {
  /** The id of the field tied to this label */
  htmlFor: string;
  /** Specifies the label text */
  label: string;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, the label will be styled to indicate that it labels a required field */
  isRequired?: boolean;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
}

const generateGrid = (
  labelPosition: POSITION,
  isLabelVisible: boolean
): string => {
  if (!isLabelVisible) {
    return `"i i i"
            "e e e"`;
  }
  if (labelPosition === POSITION.TOP) {
    return `"l l l"
            "i i i"
            "e e e"`;
  }
  return `"l i i"
          ". e e"`;
};

const StyledInputLabel = styled.label<StyledInputLabelProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr minmax(1em, max-content);
  grid-template-areas: ${({ labelPosition, isLabelVisible }) => (
    generateGrid(labelPosition, isLabelVisible)
  )};
  margin: ${fromTheme('ws', 'small')};
  align-items: baseline;
  gap: ${({ theme }) => (theme.ws.xsmall) + ' ' + (theme.ws.xsmall)};
`;

const StyledLabelText = styled.span<StyledInputLabelTextProps>`
  display: ${({ isLabelVisible }) => (isLabelVisible ? 'inline' : 'none')};
  grid-area: l;
  justify-self: ${({ labelPosition }) => (
    (labelPosition === POSITION.TOP || labelPosition === POSITION.RIGHT)
      ? 'start'
      : 'end'
  )};
  color: ${({ theme, disabled }): string => (
    (disabled)
      ? `${theme.color.text.medium}`
      : `${theme.color.text.dark}`
  )};
`;

export const RequiredSymbol = styled.span`
    color: ${fromTheme('color', 'text', 'negative')};
`;
const InputLabel:
FunctionComponent<InputLabelProps> = (props): ReactElement => {
  const {
    htmlFor,
    label,
    labelPosition,
    isLabelVisible,
    children,
    isRequired,
    disabled,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledInputLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
      isLabelVisible={isLabelVisible}
    >
      <StyledLabelText
        isLabelVisible={isLabelVisible}
        labelPosition={labelPosition}
        disabled={disabled}
      >
        <>
          {label}
          {isRequired && <RequiredSymbol>*</RequiredSymbol>}
        </>
      </StyledLabelText>
      { children }
    </StyledInputLabel>
  );
};

InputLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  disabled: false,
};

StyledInputLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
};

export default InputLabel;
