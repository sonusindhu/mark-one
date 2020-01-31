import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { darken } from 'polished';
import { BaseTheme } from '../Theme';
import { StyledButton } from './StyledButton';
import { ButtonProps } from './ButtonProps';

const StyledPrimaryButton = styled(StyledButton)`
  background: ${({ theme }): string => (theme.color.background.info.light)};
  color: ${({ theme }): string => (theme.color.text.light)};
  &:hover {
    background: ${({ theme }): string => (darken(0.2, theme.color.background.info.light))};
  }
`;

const PrimaryButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
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

export default PrimaryButton;
