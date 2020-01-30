import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';
import BasicButton, { ButtonProps } from './BasicButton';

const StyledPrimaryButton = styled(BasicButton)`
  background: ${({ theme }): string => (theme.color.background.info.light)};
  color: ${({ theme }): string => (theme.color.text.light)};
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
      clickHandler={clickHandler}
      theme={theme}
      disabled={disabled}
    >
      { children }
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
