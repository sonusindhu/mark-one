import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import { NavItem } from './NavItem';

export interface NavListProps {
  /** Our NavItem functional component serves as the children for NavList  */
  children: Array<NavItem>;
}

const StyledNavList = styled.nav`
  background-color: ${({ theme }): string => (theme.color.background.subtle)};
  border-collapse: collapse;
`;

const NavList: FunctionComponent<NavListProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledNavList theme={theme}>
      <ul>
        { children }
      </ul>
    </StyledNavList>
  );
};

declare type NavList = ReactElement<NavListProps>;

export default NavList;
