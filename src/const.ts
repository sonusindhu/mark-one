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
