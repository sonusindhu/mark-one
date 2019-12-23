import React, {
  ReactElement,
  FunctionComponent,
  useContext,
  ChangeEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface DropdownProps {
  /** An array of <option> elements that define the selections in the dropdown */
  children: Array<HTMLOptionElement>;
  /** Function to call on change event */
  onChangeHandler: ChangeEventHandler;
}

const StyledDropdown = styled.select`
  color: ${({ theme }): string => (theme.color.text.dark)};
  width: 100%;
`;

const Dropdown: FunctionComponent<DropdownProps> = (props): ReactElement => {
  const {
    children,
    onChangeHandler,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledDropdown
      onChange={onChangeHandler}
      theme={theme}
    >
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
