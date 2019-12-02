import React, {
  ReactElement, ReactNode, FunctionComponent, useContext,
} from 'react';
import { BaseTheme } from 'mark-one';
import styled, { ThemeContext } from 'styled-components';

export interface NavItemProps {
  /** Text or components to be displayed in the nav item */
  children: ReactNode;
  /** Controls whether the NavItem is in focus */
  isActive: boolean;
}

const StyledNavItem = styled.li<NavItemProps>`
  background: ${({ theme, isActive }): string => (isActive ? theme.color.background.light : theme.color.background.subtle)};
  border-bottom: ${({ theme, isActive }): string => (isActive ? '1px solid transparent' : theme.border.hairline)};
  border-left: ${({ theme, isActive }): string => (isActive ? theme.border.hairline : '1px solid transparent')};
  border-right: ${({ theme, isActive }): string => (isActive ? theme.border.hairline : '1px solid transparent')};
  border-top: ${({ theme, isActive }): string => (isActive ? theme.border.hairline : '1px solid transparent')};
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
  color: ${({ theme, isActive }): string => (isActive ? theme.color.text.medium : theme.color.text.info)};
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0.5rem 1rem;
  &:hover {
    border-bottom: ${(): string => ('1px solid transparent')};
    border-left: ${({ theme }): string => (theme.border.hairline)};
    border-right: ${({ theme }): string => (theme.border.hairline)};
    border-top: ${({ theme }): string => (theme.border.hairline)};
    color: ${({ theme }): string => (theme.color.text.medium)};
  }
`;

const NavItem: FunctionComponent<NavItemProps> = (props): ReactElement => {
  const {
    children,
    isActive,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledNavItem
      isActive={isActive}
      theme={theme}
    >
      {children}
    </StyledNavItem>
  );
};

export type NavItem = ReactElement<NavItemProps>;

export default NavItem;
