import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

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

const StyledLoadSpinnerText = styled.div`
  background: transparent;
  color: ${({ color, theme }): string => theme.color.text[color]};
  font-family: ${({ theme }): string => (theme.font.heading.family)};
  font-weight: ${({ theme }): string => (theme.font.heading.weight)};
  font-size: ${({ theme }): string => (theme.font.heading.size)};
  margin-top: ${({ theme }): string => (theme.ws.large)};
`;

/**
 * Data load spinner component with styled text under the spinner
 */
const LoadSpinnerText: FunctionComponent<LoadSpinnerTextProps> = (props):
ReactElement => {
  const { children, color } = props;
  const theme: BaseTheme = useContext(ThemeContext);
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
