import styled from 'styled-components';
import { BaseTheme } from 'mark-one';
import TableCellListItem from './TableCellListItem';

export interface TableCellListProps {
  /**
   * Should only contain TableCellListItems
   */
  children: TableCellListItem | TableCellListItem[];
  /**
   * The application theme
   */
  theme: BaseTheme;
}

const TableCellList = styled.ol<TableCellListProps>`
  list-style: none;
`;

/**
 * Used to render lists inside of table cells
 */

export default TableCellList;
