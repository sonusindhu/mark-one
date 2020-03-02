import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  ReactNode,
  MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { VARIANT } from '../Theme/MarkOneTheme';
import { BaseTheme } from '../Theme';

export interface ButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactNode;
  /** Function to call on click event */
  onClick: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in style properties for the element */
  theme?: object;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme, variant }): string => (theme.color.background[variant].medium)};
  border: none;
  color: ${({ theme, variant }): string => (theme.color.background[variant].text)};
  cursor: pointer;
  font-size: ${({ theme }): string => (theme.font.body.size)};
  font-weight: ${({ theme }): string => (theme.font.body.weight)};
  padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
  &:hover {
    background: ${({ theme, variant }): string => (theme.color.background[variant].dark)};
    border: none;
    color: ${({ theme, variant }): string => (theme.color.background[variant].text)};
  }
`;

StyledButton.defaultProps = {
  variant: VARIANT.BASE,
};

const Button: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    children,
    onClick,
    disabled,
    variant,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledButton
      onClick={onClick}
      theme={theme}
      disabled={disabled}
      variant={variant}
    >
      { children }
    </StyledButton>
  );
};

Button.defaultProps = {
  children: '',
};

export default Button;
