import React, {
  FunctionComponent, MouseEventHandler, ReactChildren, ReactElement,
} from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactChildren;
  /** Sets the class name of the element */
  className?: string;
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** If true, button won't fire */
  disabled?: boolean;
  /** Allows you to pass in style properties for the element */
  theme?: object;
}

const BasicButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    children,
    className,
    clickHandler,
    disabled,
    theme,
  } = props;
  return (
    <StyledButton
      onClick={clickHandler}
      theme={theme}
      className={className}
      disabled={disabled}
    >
      { children }
    </StyledButton>
  );
};

BasicButton.defaultProps = {
  children: '',
  className: undefined,
  disabled: undefined,
};

const StyledButton = styled.button`
  cursor: pointer;
  border: ${({ theme }): string => (theme.border ? theme.border.light : '1px solid black')};
  padding: ${({ theme }): string => (theme.ws ? theme.ws.xsmall + ' ' + theme.ws.small : '10px')};
  fontSize: ${({ theme }): string => (theme.font ? theme.font.body.size : '12px')};
  fontWeight: ${({ theme }): string => (theme.font ? theme.font.light : '200')};
  color: ${({ theme }): string => (theme.text ? theme.text.dark : 'black')};
`;

export default BasicButton;
