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
  /** Allows you to pass in a label position property from the POSITION enum */
  labelPosition?: POSITION;
  /** Specifies the id for the label */
  htmlFor: string;
}

export interface StyledLabelTextProps {
  /** If true, label will be visible */
  isLabelVisible?: boolean;
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
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ${({ labelPosition }): string => (
    labelPosition === POSITION.TOP
      ? 'repeat(3, 1fr)'
      : 'repeat(2, 1fr)'
  )};
  grid-template-areas: ${({ labelPosition }): string => (
    labelPosition === POSITION.TOP
      ? `"l l l"
        "i i i"
        "e e e"`
      : `"l i i"
        ". e e"`
  )};
  margin: ${({ theme }): string => (theme.ws.small)};
`;

const StyledLabelText = styled.span<StyledLabelTextProps>`
  display: ${({ isLabelVisible }): string => (isLabelVisible ? 'inline' : 'none')};
  grid-area: l;
`;

const Label: FunctionComponent<LabelProps> = (props): ReactElement => {
  const {
    htmlFor,
    label,
    labelPosition,
    isLabelVisible,
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLabel
      htmlFor={htmlFor}
      labelPosition={labelPosition}
      theme={theme}
    >
      <StyledLabelText
        isLabelVisible={isLabelVisible}
      >
        {label}
      </StyledLabelText>
      { children }
    </StyledLabel>
  );
};

Label.defaultProps = {
  labelPosition: POSITION.LEFT,
  isLabelVisible: true,
};

export default Label;
