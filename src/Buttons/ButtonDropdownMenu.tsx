import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  VARIANT,
} from '../Theme';
import Button from './Button';
import ButtonDropdownMenuItem from './ButtonDropdownMenuItem';
import { DropdownList } from '../Lists';

export interface ButtonDropdownProps {
  /** The id of the button */
  id?: string;
  /** Specifies the text or Font Awesome Icon displayed on the button */
  label: ReactNode;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Specifies the ref of the element */
  forwardRef?: Ref<HTMLButtonElement>;
  /** Allows user to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
  /** Our ButtonDropdownMenuItem functional component serves as the children for ButtonDropdownMenu  */
  children: ButtonDropdownMenuItem | ButtonDropdownMenuItem[];
}

/**
 * A component that allows users to specify a Font Awesome icon to be displayed
 * in the button and options within the dropdown. When an option is clicked, the
 * value that was selected is passed to the onChange function and the dropdown
 * menu collapses.
 */
const ButtonDropdownMenu: FunctionComponent<ButtonDropdownProps> = (props)
: ReactElement => {
  const {
    id,
    label,
    forwardRef,
    alt,
    variant,
    children,
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
        { label }
      </Button>
      {isMenuVisible && (
        <DropdownList>
          {children}
        </DropdownList>
      )}
    </>
  );
};

ButtonDropdownMenu.defaultProps = {
  variant: VARIANT.BASE,
};

export default ButtonDropdownMenu;
