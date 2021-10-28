import { useState, useEffect } from 'react';

/**
* A default message shown in the confirm dialog when the user has unsaved
* changes
*/
const confirmMessage = "You have unsaved changes. Click 'OK' to disregard changes, or 'Cancel' to continue editing.";

/**
*  The functions returned by calling useConfirm in a component
*/
export interface UseConfirmFunctions {
  /**
   * Function that should be called alongside any changes to the application
   * data. After this has been called with true, the browser will prompt the user
   * to discard their changes when confirmDiscard is called, or when they try to
   * navigate/refresh away. Calling with false will reset the change state,
   * causing all checks to pass.
   */
  markAsChanged: (state: boolean) => void;
  /**
   * if markAsChanged has been called already, show a prompt asking the user to
   * confirm that their changes should be discarded. This is for use when closing
   * non-navigation elements, e.g. modals.
   */
  confirmDiscard: () => boolean;
}

/**
* A custom hook that implements a "confirm before discarding unsaved changes"
* prompt by returning a function to explicitly mark the local data as changed.
* It adds an event listener that will prompt the user before navigating away,
* and also provides a function to explicitly prompt the user for use in a
* cancel button or other non-navigation exit.
*/
export const useConfirm = (): UseConfirmFunctions => {
  /**
   * Keeps track of whether the user has altered fields in the form to determine
   * whether to show a confirmation dialog on modal close
   */
  const [
    isChanged,
    setIsChanged,
  ] = useState(false);

  /**
   * Used to add the before unload listener in the case that a form field is changed
   */
  useEffect(() => {
    /**
     * Checks to see if there are any unsaved changes in the modal when the user
     * refreshes the page. If there are unsaved changes, the browser displays a
     * warning message to confirm the page reload. If the user selects cancel, the
     * user can continue making changes in the modal.
     */
    const onBeforeUnload = (event: Event) => {
      if (!isChanged) return;
      event.preventDefault();
      // Need to disable this rule for browser compatibility reasons
      // eslint-disable-next-line no-param-reassign
      event.returnValue = false;
      return confirmMessage;
    };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [isChanged]);

  return {
    markAsChanged: (state) => {
      setIsChanged(state);
    },
    confirmDiscard: () => {
      if (isChanged) {
        // eslint-disable-next-line no-alert
        if (!window.confirm(confirmMessage)) {
          return false;
        }
        setIsChanged(false);
      }
      return true;
    },
  };
};
