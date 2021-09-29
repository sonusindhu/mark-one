import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { fromTheme } from '../Theme';

export interface ListItemProps {
  /**
   * The contents of the list item
   */
  children: ReactNode;
}

/**
* The items to be displayed inside of the List component.
*/
const ListItem = styled.li<ListItemProps>`
  padding: ${fromTheme('ws', 'small')} 0px;
`;

declare type ListItem = ReactElement<ListItemProps>;

export default ListItem;
