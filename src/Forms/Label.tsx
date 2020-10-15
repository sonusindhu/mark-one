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

export interface StyledLabelProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Specifies the id for the label */
  htmlFor: string;
  /** If true, remove the margin on the StyledLabelProps */
  hideError?: boolean;
}

export interface StyledLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
  /** If true, remove the margin on the StyledLabelProps */
  hideError?: boolean;
}

export interface LabelProps {
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
  /** If true, remove the margin on the StyledLabelProps */
  hideError?: boolean;
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
  if (labelPosition === POSITION.RIGHT) {
    return `"i l l"
            ". e e"`;
  }
  return `"l i i"
          ". e e"`;
};

const StyledLabel = styled.label<StyledLabelProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr minmax(1em, max-content);
  grid-template-areas: ${({ labelPosition, isLabelVisible }) => (
    generateGrid(labelPosition, isLabelVisible)
  )};
  margin: ${fromTheme('ws', 'small')}
  align-items: baseline;
  gap: ${({ theme }) => (theme.ws.xsmall) + ' ' + (theme.ws.xsmall)};
  ${({ hideError }) => (hideError 
    ? `margin: 0px;
       gap: 0px;
       grid-template-rows: 1fr;
      `
    : null
  )};
`;

const StyledLabelText = styled.span<StyledLabelTextProps>`
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
const Label: FunctionComponent<LabelProps> = (props): ReactElement => {
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
    <StyledLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
      isLabelVisible={isLabelVisible}
      hideError={hideError}
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
    </StyledLabel>
  );
};

Label.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  disabled: false,
  hideError: false,
};

StyledLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  hideError: false,
};

export default Label;
