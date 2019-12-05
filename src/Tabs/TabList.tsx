import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import { TabListItem } from './TabListItem';

export interface TabListProps {
  /** Our NavItem functional component serves as the children for NavList  */
  children: Array<TabListItem>;
}

const StyledTabList = styled.ul`
  background-color: ${({ theme }): string => (theme.color.background.subtle)};
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const TabList: FunctionComponent<TabListProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTabList theme={theme}>
      { children }
    </StyledTabList>
  );
};

declare type TabList = ReactElement<TabListProps>;

export default TabList;
