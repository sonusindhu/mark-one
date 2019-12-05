import {
  ReactElement,
} from 'react';
import styled, { withTheme } from 'styled-components';
import { TabListItem } from './TabListItem';

export interface TabListProps {
  /** Our NavItem functional component serves as the children for NavList  */
  children: Array<TabListItem>;
}

const TabList = styled.ul`
  background-color: ${({ theme }): string => (theme.color.background.subtle)};
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export type TabList = ReactElement<TabListProps>;

export default withTheme(TabList);
