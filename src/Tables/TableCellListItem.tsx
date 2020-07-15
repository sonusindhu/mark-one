import { ReactElement, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';

export interface TableCellListItemProps {
  /**
   * The application theme
   */
  theme: DefaultTheme;
  /**
   * The contents of the list item
   */
  children: ReactNode;
}

const TableCellListItem = styled.li<TableCellListItemProps>`
  border-top: ${({ theme }): string => (theme.border.hairline)};
  padding: ${({ theme }): string => (theme.ws.small)} 0px;
  &:first-child {
    border-top: none;
  }
`;

declare type TableCellListItem = ReactElement<TableCellListItemProps>;

export default TableCellListItem;
