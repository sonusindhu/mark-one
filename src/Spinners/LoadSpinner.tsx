import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { fromTheme, VARIANT } from 'Theme';
import LoadSpinnerText, { SPINNER_TEXT } from './LoadSpinnerText';

export interface LoadSpinnerProps {
  /** Specifies the text under the spinner */
  children: string;
  /** Specifies the color of text under the spinner */
  textColor?: SPINNER_TEXT;
}

const StyledLoadSpinner = styled.div`
  background: transparent;
  color: ${fromTheme('color', 'background', VARIANT.INFO, 'medium')};
  display: flex;
  flex-flow: column;
  align-items: center;
  width:100%;
`;

/**
 * Data load spinner component with styled text under the spinner
 */
const LoadSpinner: FunctionComponent<LoadSpinnerProps> = (props):
ReactElement => {
  const {
    children,
    textColor,
  } = props;
  const theme = useContext(ThemeContext);

  return (
    <StyledLoadSpinner role="alert" theme={theme}>
      <FontAwesomeIcon icon={faCircleNotch} size="8x" spin />
      <LoadSpinnerText color={textColor}>
        {children}
      </LoadSpinnerText>
    </StyledLoadSpinner>
  );
};

export default LoadSpinner;
