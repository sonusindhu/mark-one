import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  ReactNode,
  MouseEventHandler,
} from 'react';
import { VARIANT } from 'Theme/MarkOneTheme';
import styled, { ThemeContext } from 'styled-components';
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

// If background is primary or danger, have light text (theme.color.text.light)
// If background is light, have dark text (theme.color.text.base)
const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme, variant }): string => (theme.color.background[variant].medium)};
  border-color: ${({ theme, variant }): string => (theme.color.background[variant].medium)};
  border-style: solid;
  border-width: 1px;
  color: ${({ theme, variant }): string => (theme.color.text[variant])};
  cursor: pointer;
  font-size: ${({ theme }): string => (theme.font.body.size)};
  font-weight: ${({ theme }): string => (theme.font.body.weight)};
  padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
  &:hover {
    background: ${({ theme, variant }): string => (theme.color.background[variant].dark)};
    border-color: ${({ theme, variant }): string => (theme.color.background[variant].dark)};
    color: ${({ theme, variant }): string => (theme.color.text[variant])};
  }
`;

StyledButton.defaultProps = {
  variant: VARIANT.BASE,
};

const BasicButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
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

BasicButton.defaultProps = {
  children: '',
};

export default BasicButton;
