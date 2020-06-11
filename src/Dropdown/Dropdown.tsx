import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  ChangeEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface DropdownProps {
  /** The id of the label tied to this dropdown field */
  id: string;
  /** Function to call on change event */
  onChange: ChangeEventHandler;
  /** The name of the dropdown */
  name: string;
  /** An array of objects with the properties 'label' and 'value' for each dropdown option */
  options: Array<{label: string; value: string}>;
  /** The currently selected dropdown value */
  value?: string;
  /** The dropdown value selected by default */
  defaultValue?: string;
}

const StyledDropdown = styled.select`
  color: ${({ theme }): string => (theme.color.text.dark)};
  width: 100%;
`;

const Dropdown: FunctionComponent<DropdownProps> = (props): ReactElement => {
  const {
    id,
    onChange,
    name,
    options,
    value,
    defaultValue,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledDropdown
      id={id}
      onChange={onChange}
      theme={theme}
      name={name}
      value={value}
      defaultValue={defaultValue}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
