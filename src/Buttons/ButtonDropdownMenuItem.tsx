import React, {
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

export interface ButtonDropdownMenuItemProps {
  /** The label describing the menu item */
  label: string;
  /** The value of the menu item */
  value: string;
  /** Function to call on click event */
  onClick: MouseEventHandler;
}

const StyledMenuListItem = styled.li`
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
    cursor: pointer;
  }
`;

const StyledMenuButton = styled.button`
  background: transparent;
  border: none;
  padding: ${fromTheme('ws', 'small')};
  width: 100%;
  &:hover {
    background: ${fromTheme('color', 'background', 'medium')};
    cursor: pointer;
  }
`;

const ButtonDropdownMenuItem
: FunctionComponent<ButtonDropdownMenuItemProps> = (props): ReactElement => {
  const {
    onClick,
    label,
    value,
  } = props;
  return (
    <StyledMenuListItem
      value={value}
    >
      <StyledMenuButton
        onClick={onClick}
      >
        {label}
      </StyledMenuButton>
    </StyledMenuListItem>
  );
};

export default ButtonDropdownMenuItem;
