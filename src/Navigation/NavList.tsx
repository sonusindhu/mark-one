import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import { NavItem } from './NavItem';

export interface NavListProps {
  children: NavItem;
  /** Allows you to pass in style properties for the element */
  theme?: object;
}

const StyledNavList = styled.nav`

`;

const NavList: FunctionComponent<NavListProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledNavList theme={theme}>
      { children }
    </StyledNavList>
  );
};

declare type NavList = ReactElement<NavListProps>;

export default NavList;
