import React, {
  FunctionComponent, ReactElement,
} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import LoadSpinnerText from './LoadSpinnerText';

export interface LoadSpinnerProps {
  /** Specifies the text under the spinner */
  children: string;
  /** Specifies the color of text under the spinner */
  color?: string;
}

const StyledLoadSpinner = styled.div`
  background: transparent;
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
    children,
    color,
  } = props;
  return (
    <StyledLoadSpinner role="alert">
      <FontAwesomeIcon icon={faCircleNotch} size="8x" spin />
      <LoadSpinnerText color={color}>
        {children}
      </LoadSpinnerText>
    </StyledLoadSpinner>
  );
};

export default LoadSpinner;
