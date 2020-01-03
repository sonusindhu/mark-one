import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  ChangeEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface DropdownProps {
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
    onChange,
    name,
    options,
    value,
    defaultValue,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledDropdown
      onChange={onChange}
      theme={theme}
      name={name}
      value={value}
      defaultValue={defaultValue}
    >
      {options.map((x) => (
        <option value={x.value}>
          {x.label}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
