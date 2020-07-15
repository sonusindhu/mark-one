import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { VARIANT, fromTheme } from '../Theme';

export interface BorderlessButtonProps {
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
  color: ${({ variant, theme }) => (
    fromTheme('color', 'background', variant, 'medium')({ theme })
  )};
  cursor: pointer;
  font-size: ${fromTheme('font', 'body', 'size')};
  font-weight: ${fromTheme('font', 'body', 'weight')};
  padding: ${({ theme }) => (`${theme.ws.xsmall} ${theme.ws.small}`)};
  &:hover {
    background: transparent;
  color: ${({ variant, theme }) => (
    fromTheme('color', 'background', variant, 'dark')({ theme })
  )};
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
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledBorderlessButton
      id={id}
      onClick={onClick}
      theme={theme}
      disabled={disabled}
      variant={variant}
    >
      { children }
    </StyledBorderlessButton>
  );
};

export default BorderlessButton;
