import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React, {
  FunctionComponent,
  ReactElement,
  Ref,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  fromTheme,
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
}

export interface ButtonDropdownProps {
  /** The id of the button */
  id?: string;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
  /** Function to call on click of a selection within the dropdown */
  onChange: (string) => void;
  /**
   * An array of string that outline the choices in the dropdown
   */
  options: Array<DropdownOptionProps>;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Specifies the ref of the element */
  forwardRef?: Ref<HTMLButtonElement>;
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
`;

const StyledMenuList = styled.ul`
  list-style-type: none;
`;

const StyledMenuListItem = styled.li`
  padding: .25em 1em;
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
    cursor: pointer;
  }
`;

const StyledMenuButton = styled.button`
  background: transparent;
  border: none;
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
    cursor: pointer;
  }
`;

/**
 * A component that allows users to specify a Font Awesome icon to be displayed
 * in the button and options within the dropdown. When an option is clicked, the
 * value that was selected is passed to the onChange function and the dropdown
 * menu collapses.
 */
const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = (props)
: ReactElement => {
  const {
    id,
    children,
    onChange,
    forwardRef,
    alt,
    options,
  } = props;

  const [isMenuVisible, setMenuVisible] = useState(false);
  const theme = useContext(ThemeContext);

  // When the menu is open and the user clicks on the document, it minimizes the menu
  const handleDocumentBodyClick = useCallback(() => {
    setMenuVisible(false);
  }, [setMenuVisible]);

  // Removes the event listener after the click event occurs
  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener('click', handleDocumentBodyClick);
    } else {
      document.removeEventListener('click', handleDocumentBodyClick);
    }
  }, [isMenuVisible, handleDocumentBodyClick]);

  return (
    <>
      <StyledButtonDropdown
        id={id}
        onClick={() => {
          setMenuVisible(!isMenuVisible);
        }}
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
                    onChange(option.value);
                    setMenuVisible(false);
                  }}
                >
                  <StyledMenuButton>
                    {option.label}
                  </StyledMenuButton>
                </StyledMenuListItem>
              ))}
            </StyledMenuList>
          </StyledMenu>
        </>
      )}
    </>
  );
};

export default ButtonDropdown;
