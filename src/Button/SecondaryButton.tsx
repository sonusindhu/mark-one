import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import { ThemeContext } from 'styled-components';
import { BasicButton } from 'Button';
import { BaseTheme } from '../Theme';
import { ButtonProps } from './ButtonProps';

const SecondaryButton: FunctionComponent<ButtonProps> = (props):
ReactElement => {
  const {
    clickHandler,
    children,
    disabled,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <BasicButton
      clickHandler={clickHandler}
      theme={theme}
      disabled={disabled}
    >
      { children }
    </BasicButton>
  );
};

export default SecondaryButton;
