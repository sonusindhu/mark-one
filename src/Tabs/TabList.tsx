import {
  ReactElement,
} from 'react';
import styled, { withTheme } from 'styled-components';
import TabListItem from './TabListItem';

export interface TabListProps {
  /** Our TabListItem functional component serves as the children for TabList  */
  children: Array<TabListItem>;
}

/**
 * @component TabList
 * TabList is a group of tabs that can be used on its own or also wrapped in a
 * <nav> tag in order to create a navigation list
 */

const TabList = styled.ul`
  background-color: transparent;
  border-bottom: ${({ theme }): string => theme.border.hairline};
  border-collapse: collapse;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

declare type TabList = ReactElement<TabListProps>;

export default withTheme(TabList);
