/**
 * These values specify the options for the aria-live attribute values that will
 * indicate how assistive technologies should handle notifying the user of
 * changes in content.
 *
 * ARIA_LIVE_VARIANT.OFF can be used to silence notifications for elements that
 * that have a role of 'alert.'
 *
 * ARIA_LIVE_VARIANT.ASSERTIVE should be used for important notifications that
 * require the user's attention such as notifications for error messages that
 * occur during form submission.
 *
 * ARIA_LIVE_VARIANT.POLITE can be used for less important notifications. If the
 * user is actively interacting with another part of the page, the screen reader
 * will not interrupt the user to announce the notification.
 */
export enum ARIA_LIVE_VARIANT {
  OFF = 'off',
  ASSERTIVE = 'assertive',
  POLITE = 'polite',
}

/**
 * A css snippet that can be applied conditionally within a styled component to
 * hide elements from the visual output of the page, while still making them
 * accesible to assistive technologies.
 *
 * It should be included at the end of a style block to prevent other styles
 * overriding these values.
 */
export const hideFromDisplay = `
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
