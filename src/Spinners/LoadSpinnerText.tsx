import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface LoadSpinnerTextProps {
  /** Specifies the text under the spinner */
  textMsg: string;
}

const StyledLoadSpinnerText = styled.div`
  background: transparent;
  color: white;
  font: ${({ theme }): string => (theme.font.heading)};
  margin-top: ${({ theme }): string => (theme.ws.large)};
  margin-bottom: ${({ theme }): string => (theme.ws.medium)};
  display: block;
`;

/**
 * Data load spinner component with styled text under the spinner
 */
const LoadSpinnerText: FunctionComponent<LoadSpinnerTextProps> = (props):
ReactElement => {
  const { textMsg } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLoadSpinnerText theme={theme}>
      { textMsg }
    </StyledLoadSpinnerText>
  );
};

export default LoadSpinnerText;
