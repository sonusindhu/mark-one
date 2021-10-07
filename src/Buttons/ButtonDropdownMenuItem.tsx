import React, {
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';
import { DropdownListItem } from '../Lists';

export interface ButtonDropdownMenuItemProps {
  /** Function to call on click event */
  onClick: MouseEventHandler;
}

const StyledMenuListItem = styled(DropdownListItem)`
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
    children,
  } = props;
  return (
    <StyledMenuListItem>
      <StyledMenuButton
        onClick={onClick}
      >
        {children}
      </StyledMenuButton>
    </StyledMenuListItem>
  );
};

declare type ButtonDropdownMenuItem = ReactElement<ButtonDropdownMenuItemProps>;

export default ButtonDropdownMenuItem;
