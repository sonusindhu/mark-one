import {
  ReactElement, ReactNode,
} from 'react';
import styled, { withTheme } from 'styled-components';

export interface NavItemProps {
  children: ReactNode;
  /** Controls whether the NavItem is in focus */
  isActive: boolean;
}

const NavItem = styled.li<NavItemProps>`
  background: ${({ theme, isActive }): string => (isActive ? theme.color.background.light : theme.color.background.subtle)};
  border: ${({ theme, isActive }): string => (isActive ? theme.border.light : '1px solid transparent')};
  background: ${({ theme, isActive }): string => (isActive ? theme.color.background.light : theme.color.background.subtle)};
  color: ${({ theme, isActive }): string => (isActive ? theme.color.text.medium : theme.color.text.info)};
  &:hover {
    border: ${({ theme }): string => (theme.border.hairline)};
    color: ${({ theme }): string => (theme.color.text.medium)};
  }
`;

export type TableRow = ReactElement<NavItemProps>;

export default withTheme(NavItem);
