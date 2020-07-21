import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  useEffect,
  ReactNode,
  useRef,
  RefObject,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import styled, { ThemeContext } from 'styled-components';

const FADE_TIME = 250;

/**
 * A translucent background that will appear behind the modal, obscuring the
 * regular content of the page. Clicking this background will invoke the
 * onClick handler from the parent component.
 *
 * The modal-fade-* classes are used by react-transition-group to control the
 * fade in/out effects.
 */
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  &.modal-fade-appear {
    opacity: 0;
    visibility: hidden;
  }
  &.modal-fade-appear-active {
    opacity: 1;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-appear-done {
    visibility: visible;
    opacity: 1;
  }
  &.modal-fade-enter {
    opacity: 0;
    visibility: hidden;
  }
  &.modal-fade-enter-active {
    opacity: 1;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-enter-done {
    visibility: visible;
    opacity: 1;
  }
  &.modal-fade-exit {
    opacity: 1;
    visibility: visible;
  }
  &.modal-fade-exit-active {
    opacity: 0;
    visibility: visible;
    transition: opacity ${FADE_TIME}ms;
  }
  &.modal-fade-exit-done {
    visibility: hidden;
    opacity: 0;
  }
`;

export interface ModalProps {
  /**
   * The content to be displayed within the modal
   */
  children: ReactNode;
  /**
   * Identifies the element that provides the modal
   */
  ariaLabelledBy: string;
  /**
   * Function that closes the modal by flipping the isVisible value to false
   * This is passed to our background component to be called when the user
   * clicks away
   */
  closeHandler?: () => void;
  /**
   * Whether or not the modal should be visible on the package
   * This will be controlled by the parent component, likely via useState
   */
  isVisible: boolean;
  /** Specifies the ref of the Modal */
  forwardRef?: RefObject<HTMLDivElement>;
}

/**
 * Defines the modal's basic styles. We're intentionally being minimal with the
 * styling so that the Modal component can primarily be concerned with the
 * behavior of the component, and most of the look and feel can be left up to
 * the children.
 */

const StyledModal = styled.div`
  background-color: ${({ theme }): string => theme.color.background.light};
  border: ${({ theme }): string => theme.border.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40em;
  max-height: 100%;
  visibility: inherit;
`;

/**
 * @component Modal
 * A dialog style popup that can be used to alert the user to new information,
 * or to display additional editing fields/content. While open, the background
 * will be obscured and scrolling will be disabled.
 */
declare type Modal = ReactElement<ModalProps>;
const Modal: FunctionComponent<ModalProps> = ({
  isVisible,
  children,
  closeHandler,
  ariaLabelledBy,
  forwardRef,
}): ReactElement => {
  const theme = useContext(ThemeContext);

  // If the ref is not provided, create one since it is used below
  const finalForwardRef = forwardRef != null ? forwardRef : useRef(null);

  // Encompasses all of the elements that can be focused on by the user
  // If you set the index of an element to -1, that element can also be focused
  const focusables = 'button, [href], input, select, textarea,'
            + ' [tabindex]:not([tabindex="-1"])';

  /**
   * Watch the isVisible prop, and set the background overflow style when it
   * is opened. We're returning a cleanup function that will reset the style
   * when the modal unmounts.
   * */
  useEffect(() => {
    const listener = (event): void => {
      const modal: HTMLElement = finalForwardRef.current;
      if (!modal.contains(event.target as Node)) {
        const firstFocusable: HTMLElement = modal.querySelector(focusables);
        if (firstFocusable != null) {
          firstFocusable.focus();
        }
      }
    };
    if (isVisible) {
      // prevents the background from scrolling
      document.body.style.overflow = 'hidden';
      // Redirects the focus to the first focusable element in the modal when
      // modal is visible
      document.body.addEventListener('focus', listener, true);
    }
    return (): void => {
      document.body.style.overflow = '';
      document.body.removeEventListener('focus', listener);
    };
  }, [isVisible]);

  return createPortal((
    <CSSTransition
      appear
      classNames="modal-fade"
      in={isVisible}
      timeout={FADE_TIME}
    >
      <ModalBackdrop
        key="modal-backdrop"
        onClick={(evt): void => {
          closeHandler();
          evt.stopPropagation();
        }}
      >
        {isVisible && (
          <StyledModal
            role="dialog"
            aria-labelledby={ariaLabelledBy}
            aria-modal="true"
            onClick={(evt): void => { evt.stopPropagation(); }}
            theme={theme}
            ref={finalForwardRef}
          >
            { children }
          </StyledModal>
        )}
      </ModalBackdrop>
    </CSSTransition>
  ), document.body);
};

export default Modal;
