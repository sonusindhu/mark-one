import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';
import { StyledButton } from './StyledButton';
import { ButtonProps } from './ButtonProps';

const StyledPrimaryButton = styled(StyledButton)`
  background: ${({ theme }): string => (theme.color.background.info.medium)};
  color: ${({ theme }): string => (theme.color.text.light)};
  border-style: none;
  &:hover {
    background: ${({ theme }): string => (theme.color.background.info.dark)};
  }
`;

const BorderlessButton: FunctionComponent<ButtonProps> = (props):
ReactElement => {
  const {
    clickHandler,
    children,
    disabled,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledPrimaryButton
      onClick={clickHandler}
      theme={theme}
      disabled={disabled}
    >
      { children }
    </StyledPrimaryButton>
  );
};

export default BorderlessButton;
