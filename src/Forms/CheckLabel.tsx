import React, {
  ReactElement,
  useContext,
  FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';
import { POSITION, RequiredSymbol } from './InputLabel';

export interface StyledCheckLabelProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Specifies the id for the label */
  htmlFor: string;
}

export interface StyledCheckLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Used to style label text in a different style if disabled is true */
  disabled?: boolean;
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
}

const generateGrid = (
  labelPosition: POSITION,
  isLabelVisible: boolean
): string => {
  if (!isLabelVisible) {
    return `"input input input"
            "e e e"`;
  }
  if (labelPosition === POSITION.RIGHT) {
    return `"input label label"
            ". e e"`;
  }
  return `"label input input"
          ". e e"`;
};

const StyledCheckLabel = styled.label<StyledCheckLabelProps>`
  display: grid;
  grid-template-columns: ${({ labelPosition }) => (
    labelPosition === POSITION.RIGHT
      ? 'auto minmax(0, 1fr)'
      : 'repeat(3, 1fr)'
  )};
  grid-template-rows: 1fr minmax(1em, max-content);
  grid-template-areas: ${({ labelPosition, isLabelVisible }) => (
    generateGrid(labelPosition, isLabelVisible)
  )};
  margin: ${fromTheme('ws', 'small')};
  align-items: baseline;
  gap: ${({ theme }) => (theme.ws.xsmall) + ' ' + (theme.ws.xsmall)};
`;

const StyledCheckLabelText = styled.span<StyledCheckLabelTextProps>`
  display: ${({ isLabelVisible }) => (isLabelVisible ? 'inline' : 'none')};
  grid-area: label;
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

const CheckLabel: FunctionComponent<LabelProps> = (props): ReactElement => {
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
    <StyledCheckLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
      isLabelVisible={isLabelVisible}
    >
      <StyledCheckLabelText
        isLabelVisible={isLabelVisible}
        labelPosition={labelPosition}
        disabled={disabled}
      >
        <>
          {label}
          {isRequired && <RequiredSymbol>*</RequiredSymbol>}
        </>
      </StyledCheckLabelText>
      { children }
    </StyledCheckLabel>
  );
};

CheckLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
  disabled: false,
};

StyledCheckLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
};

export default CheckLabel;
