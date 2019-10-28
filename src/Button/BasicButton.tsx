import React, {
  FunctionComponent, MouseEventHandler, ReactNode, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one/Theme';

export interface ButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactNode;
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in style properties for the element */
  theme?: object;
}

const StyledButton = styled.button`
  background: ${({ theme }): string => (theme.color.background.medium)};
  border: ${({ theme }): string => (theme.border.light)};
  color: ${({ theme }): string => (theme.color.text.dark)};
  cursor: pointer;
  font-size: ${({ theme }): string => (theme.font.body.size)};
  font-weight: ${({ theme }): string => (theme.font.light)};
  padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
  &:hover {
    background: ${({ theme }): string => (theme.color.background.dark)};
  }
`;

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
