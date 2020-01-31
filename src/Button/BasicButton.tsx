import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';
import { ButtonProps } from './ButtonProps';
import { StyledButton } from './StyledButton';

const BasicButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    children,
    clickHandler,
    disabled,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledButton
      onClick={clickHandler}
      theme={theme}
      disabled={disabled}
    >
      { children }
    </StyledButton>
  );
};

BasicButton.defaultProps = {
  children: '',
};

export default BasicButton;
