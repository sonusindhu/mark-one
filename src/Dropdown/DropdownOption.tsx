import React, {
  FunctionComponent,
  ReactElement,
} from 'react';
import styled from 'styled-components';

export interface DropdownOptionProps {
  /** Text to be displayed for the dropdown option  */
  children: string;
  /** Text that represents the value of the dropdown option */
  value: string;
}

const StyledDropdownOption = styled.option`
  width: 100%;
`;
const DropdownOption: FunctionComponent<DropdownOptionProps> = (props):
ReactElement => {
  const {
    children,
    value,
  } = props;
  return (
    <StyledDropdownOption
      value={value}
    >
      {children}
    </StyledDropdownOption>
  );
};

declare type DropdownOption = ReactElement<DropdownOptionProps>;

export default DropdownOption;
