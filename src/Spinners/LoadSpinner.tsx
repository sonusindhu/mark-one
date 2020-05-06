import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { BaseTheme } from '../Theme';


export interface LoadSpinnerProps {
  /** Allows you to pass in style properties for the element */
  theme?: object;
  /** Specifies the text under the spinner */
  children: ReactElement;
}

const StyledLoadSpinner = styled.div`
  background: transparent;
  color: ${({ theme }): string => (theme.color.background.dark)};
  &:hover {
    color: ${({ theme }): string => (theme.color.background.darker)};
  }
  font: ${({ theme }): string => (theme.font.heading)};
  display: inline-block;
`;

const LoadSpinner: FunctionComponent<LoadSpinnerProps> = (props):
ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLoadSpinner theme={theme}>
      <FontAwesomeIcon icon={faSpinner} spin />
      <div>
        { children }
      </div>
    </StyledLoadSpinner>
  );
};

export default LoadSpinner;
