import React, {
  ReactElement,
  useContext,
  FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';

export type InputLabelPosition = POSITION.TOP | POSITION.LEFT;

// An enum that represents the possible values for the label's positioning
export enum POSITION {
  TOP = 'top',
  LEFT = 'left',
  RIGHT='right',
}

export interface StyledInputLabelProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: InputLabelPosition;
  /** Specifies the id for the label */
  htmlFor?: string;
  /** If true, hide the error Msg and change the style StyledLabelProps */
  hideError?: boolean;
}

export interface StyledInputLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: InputLabelPosition;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
  /** If true, hide the error Msg and change the style StyledLabelProps */
  hideError?: boolean;
}

export interface InputLabelProps {
  /** The id of the field tied to this label */
  htmlFor: string;
  /** Specifies the label text */
  label: string;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: InputLabelPosition;
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** If true, the label will be styled to indicate that it labels a required field */
  isRequired?: boolean;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
  /** If true, hide the error Msg and change the style StyledLabelProps */
  hideError?: boolean;
}

const hideFromDisplay = `
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const generateGrid = (
  labelPosition: InputLabelPosition,
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

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${({ hideError }) => (
    (hideError)
      ? '1fr'
      : '1fr minmax(1em, max-content)'
  )};
  grid-template-areas: ${({ labelPosition, isLabelVisible }) => (
    generateGrid(labelPosition, isLabelVisible)
  )};
  align-items: baseline;
  gap: ${({ hideError, isLabelVisible, theme }) => (
    (!isLabelVisible && hideError)
      ? '0px'
      : (theme.ws.xsmall) + ' ' + (theme.ws.xsmall)
  )};
`;

export const StyledInputLabelText = styled.span<StyledInputLabelTextProps>`
  ${({ isLabelVisible }) => (isLabelVisible ? '' : hideFromDisplay)};
  grid-area: l;
  justify-self: ${({ labelPosition }) => (
    labelPosition === POSITION.TOP
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
    hideError,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledInputLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
      isLabelVisible={isLabelVisible}
      hideError={hideError}
    >
      <StyledInputLabelText
        isLabelVisible={isLabelVisible}
        labelPosition={labelPosition}
        disabled={disabled}
      >
        <>
          {label}
          {isRequired && <RequiredSymbol>*</RequiredSymbol>}
        </>
      </StyledInputLabelText>
      { children }
    </StyledInputLabel>
  );
};

InputLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  disabled: false,
  hideError: false,
};

StyledInputLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  hideError: false,
};

export default InputLabel;
