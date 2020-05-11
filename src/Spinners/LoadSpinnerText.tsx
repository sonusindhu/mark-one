import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface LoadSpinnerTextProps {
  /** Specifies the text under the spinner */
  children: string;
  /** Specifies the color of the text under the spinner */
  color?: string;
}

const StyledLoadSpinnerText = styled.div`
  background: transparent;
  color: ${({ color }): string => (color)};
  font: ${({ theme }): string => (theme.font.heading)};
  margin-top: ${({ theme }): string => (theme.ws.large)};
  margin-bottom: ${({ theme }): string => (theme.ws.medium)};
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
  color: 'black',
};

export default LoadSpinnerText;
