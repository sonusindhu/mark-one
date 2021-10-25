import React, {
  FunctionComponent,
  ReactElement,
  useState,
  Ref,
} from 'react';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {
  StyledInputLabel,
  StyledInputLabelText,
  InputLabelPosition,
  RequiredSymbol,
} from './InputLabel';
import ValidationErrorMessage from './ValidationErrorMessage';
import { StyledTextInput } from './TextInput';
import { Button } from '../Buttons';
import { DropdownList, DropdownListItem } from '../Lists';
import { fromTheme } from '../Theme';
import { hideFromDisplay } from '../const';

/**
* Describes the shape of the data displayed in the combobox
*/
export interface ComboboxOption {
  /** The user-facing value, e.g. the name of an area or faculty member */
  label: string;
  /** The back-end data value, e.g. the UUID */
  value: string;
  /**
   * Allow other values to be passed in, e.g. separate firstName and lastName
   * fields. These fields won't affect the rendering of the list, but can be
   * used in conjunction with a custom filterFunction to search against other
   * fields
   */
  [key: string]: unknown;
}

interface ComboboxProps {
  /**
   * The option selected by the user. This is intended to be used as a
   * controlled component, where this value will be provided by an external
   * state
   */
  currentValue: ComboboxOption;
  /**
   * A validation message displayed under the input
   */
  errorMessage?: string;
  /**
   * The function used to filter the list of results based on the user input.
   * By default, it will perform a case-insensitive match of the user input
   * against the beginning of the option's "label" value
   *
   * The function passed here will be called inside of a `Array.filter()` call
   * on the complete list of options, so it should return true if the option
   * should be included as a valid result, and false if not
   */
  filterFunction?: (
    option: ComboboxOption,
    inputValue: string,
  ) => boolean;
  /**
   * Specifies the ref applied to the text input
   */
  forwardRef?: Ref<HTMLInputElement>;
  /**
   * Whether space for a validation error should be rendered, even if there is
   * no value in errorMessage
   */
  hideError?: boolean;
  /**
   * If false, hide the visual label but keep it rendered in the DOM for
   * accessibility
   */
  isLabelVisible?: boolean;
  /**
   * Whether to the mark the form element as a required field
   */
  isRequired?: boolean;
  /**
   * A description of the input. This is required for accessibility reasons,
   * but if you don't want it displayed visually you can set the isLabelVisible
   * value to false
   */
  label: string;
  /**
   * Whether to render the label to the left of the input, or above
   */
  labelPosition?: InputLabelPosition;
  /**
   * A handler to be called when the user selects an option. This is intended
   * to be used as a controlled component, so this function should update the
   * external state passed into currentValue
   */
  onOptionSelected: (changes: UseComboboxStateChange<ComboboxOption>) => void;
  /**
   * The list of items that should be selectable in the combobox
   */
  options: ComboboxOption[];
  /**
   * Temporary text that will be displayed in the input before the user types
   * anything
   */
  placeholder?: string;
}

/**
 * A lightly restyled version of the label used for the TextInput. We're
 * changing it to be a div because the downshift combobox library needs
 * to apply specific props to the label component
 */
const ComboboxWrapper = styled(StyledInputLabel).attrs({
  as: 'div',
})`
  align-items: baseline;
  width: 100%;
`;

/**
 * Changes the label text component into a label element, which allows the
 * downshift props to be applied correctly
 */
const ComboboxLabel = styled(StyledInputLabelText).attrs({
  as: 'label',
})`
  grid-area: l; 
`;

/**
 * A wrapper around the input and menu button, helping us display both elements
 * as a single input
 */
const InputWrapper = styled.div`
  position: relative;
  grid-area: i;
  display: flex;
  flex-direction: row;
`;

/**
 * Displays the list of options when either text is entered in the input, or the
 * menu button is clicked
 *
 * The isOpen prop is used instead of a conditional rendering block for
 * improved accessibility
 */

const ComboboxMenu = styled(DropdownList)<{isOpen: boolean}>`
  top: 1.8em;
  width: 100%;
  max-height: 16em;
  overflow-y: scroll;
  ${({ isOpen }) => (isOpen ? '' : hideFromDisplay)};
`;

/**
 * A single option rendered in the menu, which will be highlighted when
 * arrowed- or moused-over
 */
const ComboboxMenuItem = styled(DropdownListItem)<{highlight: boolean}>`
  background: ${({ highlight, theme }) => (
    highlight
      ? theme.color.background.info.light
      : null)};
`;

/**
 * Used to show that there are no matching results for a given search string.
 */
const ComboboxNoResultsItem = styled(DropdownListItem)`
  font-style: italic;
  text-align: right;
  color: ${fromTheme('color', 'text', 'medium')};
`;

/**
 * The button used to open the menu; the additional border is applied to better
 * integrate with the look and feel of the text input
 */
const ComboboxButton = styled(Button)`
  border: ${fromTheme('border', 'hairline')};
  border-left: none;
  &:hover {
    border: ${fromTheme('border', 'hairline')};
    border-left: none;
  }
`;

/**
 * An autocompleting typeahead search box that allows the user to choose one
 * entry from a list of options
 *
 * The list of options will be filtered by the user's input, and will appear in
 * the dropdown box when the user starts typing. One of the options can be
 * selected with the arrows/enter key, or by clicking with a mouse. The user
 * can also choose a value directly by clicking on the menu button, bypassing
 * the need to type
 *
 * This is intended to be used as a controlled component, where the selected
 * option will be stored in an external state value. Only a value selected from
 * the list will be passed to that state value; users cannot enter arbitrary
 * values
 *
 * The internal state and many of the accessibility features are implemented
 * with the downshift library
 */
const Combobox: FunctionComponent<ComboboxProps> = (
  {
    currentValue,
    errorMessage,
    filterFunction,
    forwardRef,
    hideError,
    isLabelVisible,
    isRequired,
    label,
    labelPosition,
    onOptionSelected,
    options,
    placeholder,
  }
): ReactElement => {
  /**
   * Holds an internal list of the options passed in via props, which will be
   * filtered based on the input
   */
  const [
    filteredOptions,
    setFilteredOptions,
  ] = useState<ComboboxOption[]>(options);

  const {
    getComboboxProps,
    getItemProps,
    getInputProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
  } = useCombobox({
    items: filteredOptions,
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: onOptionSelected,
    onInputValueChange: ({ inputValue }) => {
      setFilteredOptions(options.filter((option) => (
        filterFunction(option, inputValue)
      )));
    },
    selectedItem: currentValue,
  });

  // Grabs a reference to the downshift-generated id value, which we need in
  // the id of our error component, and the current value of the input, needed
  // for the "no results" message.
  // Note that we have to provide a type for the return object because the
  // library types the return value as "any"
  const {
    id: inputId,
    value: inputValue,
  } = getInputProps() as { id: string, value: string };

  // This rule needs to be disabled to use the getterProps created by
  // Downshift's useCombobox hook
  /* eslint-disable react/jsx-props-no-spreading */

  return (
    <ComboboxWrapper
      labelPosition={labelPosition}
      isLabelVisible={isLabelVisible}
      hideError={hideError}
    >
      <ComboboxLabel
        isLabelVisible={isLabelVisible}
        labelPosition={labelPosition}
        {...getLabelProps()}
      >
        {label}
        {isRequired && <RequiredSymbol>*</RequiredSymbol>}
      </ComboboxLabel>
      <InputWrapper {...getComboboxProps()}>
        <StyledTextInput
          {...getInputProps({ ref: forwardRef })}
          placeholder={placeholder}
        />
        <ComboboxMenu isOpen={isOpen} {...getMenuProps({ refKey: 'ref' })}>
          {filteredOptions.length > 0
            ? filteredOptions.map((item, index) => (
              <ComboboxMenuItem
                key={item.value}
                highlight={highlightedIndex === index}
                {...getItemProps({ item, index })}
              >
                {item.label}
              </ComboboxMenuItem>
            ))
            : (
              <ComboboxNoResultsItem>
                {`No results for "${inputValue}"`}
              </ComboboxNoResultsItem>
            )}
        </ComboboxMenu>
        <ComboboxButton
          alt={`Show all options for ${label}`}
          {...getToggleButtonProps({ refKey: 'forwardRef' })}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </ComboboxButton>
      </InputWrapper>
      {errorMessage && !hideError
      && (
        <ValidationErrorMessage id={`${inputId}-error`}>
          {errorMessage}
        </ValidationErrorMessage>
      )}
    </ComboboxWrapper>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

Combobox.defaultProps = {
  filterFunction: (option, inputValue) => (option.label
    .toLowerCase()
    .startsWith(
      inputValue.toLowerCase()
    )),
  hideError: false,
  isLabelVisible: true,
  isRequired: false,
  placeholder: '',
};

export default Combobox;
