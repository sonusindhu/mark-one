import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from 'Theme';

export enum SPINNER_TEXT {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface LoadSpinnerTextProps {
  /** Specifies the text under the spinner */
  children: string;
  /** Specifies the color of the text under the spinner */
  color?: SPINNER_TEXT;
}

const StyledLoadSpinnerText = styled.div<LoadSpinnerTextProps>`
  background: transparent;
  color: ${({ color, theme }) => theme.color.text[color]}; 
  font-family: ${fromTheme('font', 'heading', 'family')};
  font-weight: ${fromTheme('font', 'heading', 'weight')};
  font-size: ${fromTheme('font', 'heading', 'size')};
  margin-top: ${fromTheme('ws', 'large')};
`;

/**
 * Data load spinner component with styled text under the spinner
 */
const LoadSpinnerText: FunctionComponent<LoadSpinnerTextProps> = (props):
ReactElement => {
  const { children, color } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledLoadSpinnerText theme={theme} color={color}>
      { children }
    </StyledLoadSpinnerText>
  );
};

LoadSpinnerText.defaultProps = {
  color: SPINNER_TEXT.DARK,
};

export default LoadSpinnerText;
