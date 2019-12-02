import {
  MouseEventHandler, ReactElement, ReactNode,
} from 'react';
import styled, { withTheme } from 'styled-components';

export interface NavItemProps {
  /** Text or components to be displayed in the nav item */
  children: ReactNode;
  /** Controls whether the NavItem is in focus */
  isActive: boolean;
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
}

const NavItem = styled.li<NavItemProps>`
  background: ${({ theme, isActive }): string => (isActive ? theme.color.background.light : theme.color.background.subtle)};
  border-bottom: ${({ theme, isActive }): string => (isActive ? '1px solid transparent' : theme.border.light)};
  border-left: ${({ theme, isActive }): string => (isActive ? theme.border.light : '1px solid transparent')};
  border-right: ${({ theme, isActive }): string => (isActive ? theme.border.light : '1px solid transparent')};
  border-top: ${({ theme, isActive }): string => (isActive ? theme.border.light : '1px solid transparent')};
  color: ${({ theme, isActive }): string => (isActive ? theme.color.text.medium : theme.color.text.info)};
  margin: 0px 0px -1px;
  padding: 0px 10px;
  &:hover {
    border: ${({ theme, isActive }): string => (isActive ? theme.border.light : theme.border.hairline)};
    color: ${({ theme }): string => (theme.color.text.medium)};
  }
`;

export type NavItem = ReactElement<NavItemProps>;

export default withTheme(NavItem);
