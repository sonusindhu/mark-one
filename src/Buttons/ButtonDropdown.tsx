import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'Forms';
import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  ReactNode,
  MouseEventHandler,
  useRef,
  ChangeEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  fromTheme,
  MarkOneProps,
} from '../Theme';

interface DropdownOptionProps {
  /** The label of the dropdown option */
  label: string;
  /** The value of the dropdown option */
  value: string;
}

export interface MenuProps {
  /**
   * Whether or not the menu should be visible.
   * This will be controlled by the parent component, likely via useState.
   */
  isMenuVisible: boolean;
  /**
   * The content to be displayed within the modal
   */
  children: ReactNode;
}

export interface ButtonDropdownProps extends MarkOneProps<HTMLButtonElement> {
  /** The id of the button */
  id?: string;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
  /** Function to call on click of the dropdown button */
  onDropdownClick: MouseEventHandler;
  /** Function to call on click of a selection within the dropdown */
  onChange: ChangeEventHandler;
  /**
   * Whether or not the menu should be visible.
   * This will be controlled by the parent component, likely via useState.
   */
  isMenuVisible: boolean;
  /**
   * An array of string that outline the choices in the dropdown
   */
  options: Array<DropdownOptionProps>;
}

const StyledButtonDropdown = styled.button<ButtonDropdownProps>`
  background: ${fromTheme('color', 'background', 'medium')};
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: ${fromTheme('font', 'body', 'size')};
  font-weight: ${fromTheme('font', 'body', 'weight')};
  padding: ${({ theme }) => (`${theme.ws.xsmall} ${theme.ws.small}`)};
  &:hover {
    background: ${fromTheme('color', 'background', 'dark')};
    border: none;
    color: ${fromTheme('color', 'text', 'base')};
  }
`;

const StyledMenu = styled.div<MenuProps>`
  background: ${fromTheme('color', 'background', 'light')};
  border: ${fromTheme('border', 'hairline')};
  min-height: 3em;
  min-width: 6em;
  position: absolute;
  transform: translate3d(0em, 0.1em, 0em);
  z-index: 100;
  display: ${({ isMenuVisible }): boolean => (
    isMenuVisible
      ? 'block'
      : 'none'
  )};
`;

const StyledMenuList = styled.ul`
  list-style-type: none;
`;

const StyledMenuListItem = styled.li`
  padding: .25em 1em;
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
  }
`;

const StyledMenuButton = styled.button`
  background: transparent;
  border: none;
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
  }
`;

const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = (props)
: ReactElement => {
  const {
    id,
    children,
    onDropdownClick,
    onChange,
    forwardRef,
    alt,
    isMenuVisible,
    options,
  } = props;

  const theme = useContext(ThemeContext);
  const hiddenDropdownRef = useRef(null as HTMLSelectElement);

  return (
    <>
      <StyledButtonDropdown
        id={id}
        onClick={onDropdownClick}
        theme={theme}
        ref={forwardRef}
        aria-label={alt}
      >
        { children }
      </StyledButtonDropdown>
      {isMenuVisible && (
        <>
          <StyledMenu isMenuVisible={isMenuVisible}>
            <StyledMenuList>
              {options.map((option) => (
                <StyledMenuListItem
                  key={option.value}
                  onClick={() => {
                    hiddenDropdownRef.current.value = option.value;
                    // Note that the event must be created this way for the event to be recognized by React
                    const hiddenDropdownEvent = document.createEvent('HTMLEvents');
                    hiddenDropdownEvent.initEvent('change', true, false);
                    hiddenDropdownRef.current
                      .dispatchEvent(hiddenDropdownEvent);
                  }}
                >
                  <StyledMenuButton>
                    {option.label}
                  </StyledMenuButton>
                </StyledMenuListItem>
              ))}
            </StyledMenuList>
          </StyledMenu>
          <div style={{ display: 'none' }}>
            <Dropdown
              id={`${id}HiddenDropdown`}
              name={`${id}HiddenDropdown`}
              label="Hidden Dropdown"
              options={options}
              forwardRef={hiddenDropdownRef}
              onChange={onChange}
            />
          </div>
        </>
      )}
    </>
  );
};

ButtonDropdown.defaultProps = {
  isMenuVisible: false,
};

export default ButtonDropdown;
