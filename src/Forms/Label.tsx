import React, {
  ReactElement,
  useContext,
  FunctionComponent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme/index';

/** An enum that represents the possible values for the label's positioning */
export enum POSITION {
  TOP = 'top',
  LEFT = 'left',
}

export interface StyledLabelProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Specifies the id for the label */
  htmlFor: string;
}

export interface StyledLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
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
}

export interface RequiredSymbolProps {
  /** Text to be displayed */
  children: string;
}

const generateGrid = (labelPosition, isLabelVisible): string => {
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

const StyledLabel = styled.label<StyledLabelProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr minmax(1em, max-content);
  grid-template-areas: ${({ labelPosition, isLabelVisible }): string => (
    generateGrid(labelPosition, isLabelVisible)
  )};
  margin: ${({ theme }): string => (theme.ws.small)};
  align-items: baseline;
  gap: ${({ theme }): string => (theme.ws.xsmall) + ' ' + (theme.ws.xsmall)};
`;

const StyledLabelText = styled.span<StyledLabelTextProps>`
  display: ${({ isLabelVisible }): string => (isLabelVisible ? 'inline' : 'none')};
  grid-area: l;
  justify-self: ${({ labelPosition }): string => (
    labelPosition === POSITION.TOP
      ? 'start'
      : 'end'
  )};
`;

const RequiredSymbol = styled.span`
    color: ${({ theme }): string => (theme.color.text.negative)};
`;
const Label: FunctionComponent<LabelProps> = (props): ReactElement => {
  const {
    htmlFor,
    label,
    labelPosition,
    isLabelVisible,
    children,
    isRequired,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
      isLabelVisible={isLabelVisible}
    >
      <StyledLabelText
        isLabelVisible={isLabelVisible}
        labelPosition={labelPosition}
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
};

StyledLabel.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
};

export default Label;
