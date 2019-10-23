import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

/** Simple styled button
 * @class Generics/BasicButton
 * @extends React.Component
 * @prop  {Object}  props
 * @prop  {String}  [props.style=default]  One of the enumerated button styles
 * @prop  {String}  props.clickHandler  Function to call on click
 * @prop  {String|Object|Object[]}  props.children  Text or components to be displayed on the button
 * @prop  {Boolean}  props.disabled  if true, button won't fire
 */

export interface ButtonProps {
  children?: ReactNode,
  className?: string,
  clickHandler: MouseEventHandler,
  disabled?: boolean,
  theme: object,
}

const BasicButton: FunctionComponent<ButtonProps> = (props) => {
  const {
    children,
    className,
    clickHandler,
    disabled,
    theme,
  } = props
  return 
  <ThemeProvider theme={theme}>
    <StyledButton>
      { children }
    </StyledButton>
  </ThemeProvider>
}

BasicButton.defaultProps = {
  children: '',
  className: undefined,
  disabled: undefined,
  theme: {
    // TODO - add default theme
  }
}

const StyledButton = styled.button.attrs(props => ({
  //TODO insert static props here and dynamic props below
  cursor: 'pointer',
}))`
  disabled: ${props => props.disabled};
`

/**
 * Button Styles
 * @member
 * @constant
 * @type  {Object}
 * @prop  {String}  POSITIVE
 * @prop  {String}  NEGATIVE
 * @prop  {String}  NEUTRAL
 * @prop  {String}  DEFAULT
 */

export const BUTTON = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  NEUTRAL: 'neutral',
  DEFAULT: 'default',
};

export default BasicButton;