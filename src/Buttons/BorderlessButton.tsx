import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import {
  VARIANT,
  fromTheme,
  MarkOneProps,
} from '../Theme';

export interface BorderlessButtonProps extends MarkOneProps<HTMLButtonElement> {
  /** The id of the button */
  id?: string;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
  /** Function to call on click event */
  onClick: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const StyledBorderlessButton = styled.button<BorderlessButtonProps>`
  background: transparent;
  border: none;
  color: ${({ variant, theme }) => theme.color.background[variant].medium};
  cursor: pointer;
  font-size: ${fromTheme('font', 'body', 'size')};
  font-weight: ${fromTheme('font', 'body', 'weight')};
  padding: ${({ theme }) => (`${theme.ws.xsmall} ${theme.ws.small}`)};
  &:hover {
    background: transparent;
    color: ${({ variant, theme }) => theme.color.background[variant].dark};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme, variant }) => theme.color.background[variant].medium};
    opacity: 0.66;
  }
`;

StyledBorderlessButton.defaultProps = {
  variant: VARIANT.BASE,
};

const BorderlessButton: FunctionComponent<BorderlessButtonProps> = (props):
ReactElement => {
  const {
    id,
    onClick,
    children,
    disabled,
    variant,
    forwardRef,
    alt,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledBorderlessButton
      id={id}
      onClick={onClick}
      theme={theme}
      disabled={disabled}
      variant={variant}
      ref={forwardRef}
      aria-label={alt}
    >
      { children }
    </StyledBorderlessButton>
  );
};

export default BorderlessButton;
