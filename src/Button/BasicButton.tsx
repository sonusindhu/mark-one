import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

/** Simple styled button
 * @class Generics/BasicButton
 * @extends React.Component
 * @prop  {Object}  props
 * @prop  {String}  [props.style=default]  One of the enumerated button styles
 * @prop  {String}  props.clickHandler  Function to call on click
 * @prop  {String|Object|Object[]}  props.children  Text or components to be displayed on the button
 * @prop  {Boolean}  props.disabled  if true, button won't fire
 */

type ButtonProps = {
  children?: ReactNode,
  className?: string,
  clickHandler: MouseEventHandler,
  disabled?: boolean,
}

export const BasicButton: FunctionComponent<ButtonProps> = (props) => {
  const {
    children,
    className,
    clickHandler,
    disabled
  } = props
  return <StyledButton>{ children }</StyledButton>
}

BasicButton.defaultProps = {
  children: '',
  className: undefined,
  disabled: undefined,
}

const StyledButton = styled.button.attrs(props => ({
  //TODO insert static props here and dynamic props below
}))`
  disabled: ${props => props.disabled}
`

/**
 * The below code is the original code
 */

// export default class BasicButton extends Component {
//   static propTypes = {
//     children: PropTypes.node,
//     className: PropTypes.string,
//     clickHandler: PropTypes.func.isRequired,
//     disabled: PropTypes.bool,
//     style: PropTypes.oneOf(Object.values(BUTTON)),
//   };

//   static defaultProps = {
//     children: '',
//     className: undefined,
//     disabled: undefined,
//     style: BUTTON.DEFAULT,
//   };

//   render() {
//     const {
//       children, clickHandler, disabled, style, className,
//     } = this.props;
//     return (
//       <button
//         type="button"
//         className={classNames('form__button', className, {
//           [`button--${style}`]: Object.values(BUTTON).includes(style),
//           'button--disabled': disabled,
//         })}
//         onClick={() => {
//           if (!disabled) {
//             clickHandler();
//           }
//         }}
//         disabled={disabled}
//       >
//         {children}
//       </button>
//     );
//   }
// }

/** The following is from EAF in '../../../constants'
 * Button Styles
 * @member
 * @constant
 * @type  {Object}
 * @prop  {String}  POSITIVE
 * @prop  {String}  NEGATIVE
 * @prop  {String}  NEUTRAL
 * @prop  {String}  DEFAULT

export const BUTTON = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  NEUTRAL: 'neutral',
  DEFAULT: 'default',
};

 */

 /** The following is from EAF https://code.harvard.edu/SEAS/eaf/blob/master/src/client/css/forms.css
.form__button {
  cursor: pointer;
  border: var(--border-light);
  padding: var(--ws-xsmall) var(--ws-small);
  font-size: var(--font-body-size);
  font-weight: var(--font-light);
  color: var(--text-dark);
  margin: var(--ws-xsmall);
}

.button--default {
  background: var(--background-medium);
}

.button--default:hover {
  background: var(--background-dark);
}

.button--positive {
  background: var(--background-success-light);
}
.button--positive:hover {
  background: var(--background-success-dark);
}
.button--negative {
  background: var(--background-failure-light);
}
.button--negative:hover {
  background: var(--background-failure-dark);
}
.button--neutral {
  background: var(--background-info-light);
}
.button--neutral:hover {
  background: var(--background-info-dark);
}

.button--hidden {
  display: none;
}

.button--disabled,
.button--disabled:hover {
  opacity: 0.5;
  cursor: not-allowed;
}
 */


 /** This is from https://code.harvard.edu/SEAS/eaf/blob/master/src/client/css/variables.css
:root {
  //Background Colors
  --background-light: rgb(255, 255, 255);
  --background-subtle: rgba(180, 180, 180, 0.1);
  --background-medium: rgb(210, 210, 210);
  --background-dark: rgb(144, 144, 144);
  --background-darker: rgb(64, 64, 64);
  --background-accent: rgb(144, 48, 48);
  --background-info-light: rgba(12, 96, 144, 0.25);
  --background-info-dark: rgba(12, 96, 144, 0.6);
  --background-info-solid: rgba(12, 96, 144, 1);
  --background-success-light: rgba(64, 222, 64, 0.35);
  --background-success-dark: rgba(64, 222, 64, 0.5);
  --background-success-solid: rgba(64, 222, 64, 1);
  --background-failure-light: rgba(255, 64, 64, 0.35);
  --background-failure-dark: rgba(255, 64, 64, 0.5);
  --background-failure-solid: rgba(255, 64, 64, 1);

  //Text Colors
  --text-light: rgb(231, 231, 231);
  --text-medium: rgb(144, 144, 144);
  --text-dark: rgb(24, 24, 24);
  --text-info: rgb(12, 96, 144);
  --text-active: rgb(42, 200, 88);
  --text-negative: rgb(255, 64, 64);
  --text-overdue: rgb(255, 0, 0);
  --text-approved: rgb(60, 118, 61);
  --text-denied: rgb(169, 68, 66);

  //Font Faces
  --font-sans: "Open Sans", sans-serif;
  --font-mono: "Roboto Mono", monospace;

  //Font Size
  --font-base-size: 16px;
  --font-body-size: 1em;
  --font-note-size: 0.85em;
  --font-form-error-size: 0.8em;
  --font-bold-size: 0.9em;
  --font-data-size: 0.9em;
  --font-heading-size: 1.1em;
  --font-title-size: 1.33em;
  --font-content-title-size: 1.66em;

  //Font Weights
  --font-light: 300;
  --font-regular: 400;
  --font-bold: 600;

  //Shadows
  --shadow-medium: 0 4px 16px 2px rgba(0, 0, 0, 0.24);
  --shadow-light: 0 4px 8px rgba(0, 0, 0, 0.28);
  --shadow-extra-light: 0 2px 4px rgba(0, 0, 0, 0.24);
  --shadow-tab-active: 1px 1px 4px rgba(0, 0, 0, 0.24);

  //Borders
  --border-hairline: 1px solid rgb(222, 222, 222);
  --border-light: 2px solid rgba(180, 180, 180, 0.25);
  --border-heavy: 6px solid rgba(96, 96, 96, 0.85);
  --border-accent: 2px solid var(--background-accent);
  --border-blur: 2px solid var(--background-medium);
  --border-hover: 2px solid var(--background-info-light);
  --border-focus: 2px solid var(--background-info-dark);
  --border-blur-large: 4px solid var(--background-medium);
  --border-hover-large: 4px solid var(--background-info-light);
  --border-focus-large: 4px solid var(--background-info-dark);

  //White Space
  --ws-zero: 0px;
  --ws-xsmall: 5px;
  --ws-small: 10px;
  --ws-medium: 15px;
  --ws-large: 25px;
  --ws-xlarge: 40px;

  //Outlines
  --outline-light: 1px dashed var(--background-info-light);

  //Breakpoints
  --breakpoint-medium: 600px;
  --bre
  */