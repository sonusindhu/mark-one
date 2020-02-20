import React, {
  FunctionComponent, ReactElement, useContext, ReactNode, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';
import { StyledButton } from './StyledButton';

export interface BorderlessButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactNode;
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in style properties for the element */
  theme?: object;
  /** Allows you to pass in a color property from the COLOR enum */
  color?: COLOR;
}

enum COLOR {
  LIGHT = 'light',
  DARK = 'dark',
}

const StyledBorderlessButton = styled(StyledButton)`
  background: transparent;
  border-style: none;
  color: ${({ theme, color }): string => (theme.color.text[color])};
  &:hover {
    background: transparent;
    color: ${({ theme, color }): string => (theme.color.text[color])};
  }
`;

StyledBorderlessButton.defaultProps = {
  color: 'dark',
};

const BorderlessButton: FunctionComponent<BorderlessButtonProps> = (props):
ReactElement => {
  const {
    clickHandler,
    children,
    disabled,
    color,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledBorderlessButton
      onClick={clickHandler}
      theme={theme}
      disabled={disabled}
      color={color}
    >
      { children }
    </StyledBorderlessButton>
  );
};

export default BorderlessButton;
