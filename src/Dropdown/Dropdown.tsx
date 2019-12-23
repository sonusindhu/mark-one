import React, {
  ReactElement,
  FunctionComponent,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface DropdownProps {
  children: Array<HTMLOptionElement>;
}

const StyledDropdown = styled.select`

`;

const Dropdown: FunctionComponent<DropdownProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledDropdown theme={theme}>
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
