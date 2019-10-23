import React, { FunctionComponent, MouseEventHandler, ReactNode, ReactElement } from 'react';
import styled, { ThemeConsumer } from 'styled-components';

export interface ButtonProps {
  /** Text or components to be displayed on the button */
  children?: ReactNode,
  /** Sets the class name of the element */
  className?: string,
  /** Function to call on click event */
  clickHandler: MouseEventHandler,
  /** If true, button won't fire */
  disabled?: boolean,
  /** Allows you to pass in style properties for the element */
  theme: object,
}

const BasicButton: FunctionComponent<ButtonProps> = (props): ReactElement => {
  const {
    children,
    className,
    clickHandler,
    disabled,
    theme,
  } = props
  return (
    <StyledButton 
      onClick={ clickHandler } 
      theme={ theme } 
      className={ className } 
      disabled={ disabled }>
      { children }
    </StyledButton>
  )
}

BasicButton.defaultProps = {
  children: '',
  className: undefined,
  disabled: undefined,
}

const StyledButton = styled.button.attrs(props => ({
  className: props.className,
  disabled: props.disabled,
}))`
  cursor: pointer;
  border: ${({theme}) => theme.border.light};
  padding: ${({theme}) => theme.ws.xsmall + ' ' + theme.ws.small};
  fontSize: ${({theme}) => theme.font.body.size};
  fontWeight: ${({theme}) => theme.font.light};
  color: ${({theme}) => theme.text.dark};
`

export default BasicButton;