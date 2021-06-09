import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  fromTheme, VARIANT,
} from '../Theme';
import Button from './Button';

interface DropdownOptionProps {
  /** The label of the dropdown option */
  label: string;
  /** The value of the dropdown option */
  value: string;
}

export interface ButtonDropdownProps {
  /** The id of the button */
  id?: string;
  /** Specifies the text or Font Awesome Icon displayed on the button */
  children: ReactNode;
  /** Function to call on click of a selection within the dropdown */
  onChange: (arg0: string) => void;
  /** An array of string that outline the choices in the dropdown */
  options: Array<DropdownOptionProps>;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Specifies the ref of the element */
  forwardRef?: Ref<HTMLButtonElement>;
  /** Allows user to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const StyledMenu = styled.div`
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
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
    cursor: pointer;
  }
`;

const StyledMenuButton = styled.button`
  background: transparent;
  border: none;
  padding: ${fromTheme('ws', 'small')};
  width: 100%;
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
    variant,
  } = props;

  const [isMenuVisible, setMenuVisible] = useState(false);

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
      <Button
        id={id}
        onClick={() => {
          setMenuVisible(!isMenuVisible);
        }}
        forwardRef={forwardRef}
        alt={alt}
        variant={variant}
      >
        { children }
      </Button>
      {isMenuVisible && (
        <StyledMenu>
          <StyledMenuList>
            {options.map((option) => (
              <StyledMenuListItem
                key={option.value}
              >
                <StyledMenuButton
                  onClick={() => {
                    onChange(option.value);
                  }}
                >
                  {option.label}
                </StyledMenuButton>
              </StyledMenuListItem>
            ))}
          </StyledMenuList>
        </StyledMenu>
      )}
    </>
  );
};

ButtonDropdown.defaultProps = {
  variant: VARIANT.BASE,
};

export default ButtonDropdown;
