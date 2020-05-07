import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { BaseTheme } from '../Theme';
import LoadSpinnerText from './LoadSpinnerText';

export interface LoadSpinnerProps {
  /** Specifies the text under the spinner */
  textMsg: string;
}

const StyledLoadSpinner = styled.div`
  background: gray;
  color: lightblue;
  display: inline-block;
  text-align:center;
  width:100%;
  padding:5%;
`;

/**
 * Data load spinner component with styled text under the spinner
 */
const LoadSpinner: FunctionComponent<LoadSpinnerProps> = (props):
ReactElement => {
  const {
    textMsg,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLoadSpinner theme={theme}>
      <FontAwesomeIcon icon={faCircleNotch} size="8x" spin />
      <LoadSpinnerText textMsg={textMsg} />
    </StyledLoadSpinner>
  );
};

export default LoadSpinner;
