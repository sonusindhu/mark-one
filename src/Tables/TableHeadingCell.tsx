import {
  MouseEventHandler,
  ReactNode,
  ReactElement,
} from 'react';
import styled, { withTheme } from 'styled-components';

export interface TableHeadingCellProps {
  /** Specifies the background color of the table cell */
  backgroundColor?: string;
  /** Text or components to be displayed in the table heading cell */
  children: ReactNode;
  /** Function to call on click event */
  clickHandler?: MouseEventHandler;
  /** Handles cells that span multiple columns */
  colSpan?: number;
  /** Handles cells that span multiple rows */
  rowSpan?: number;
  /** Specifies the group of cells that the table heading refers to */
  scope: 'col' | 'colgroup' | 'auto';
}

const StyledTableHeadingCell = styled.th<TableHeadingCellProps>`
  background-color: ${({ theme, backgroundColor }): string => (
    backgroundColor || theme.color.background.medium
  )};
  border: ${({ theme }): string => (theme.border.light)};
  font-weight: ${({ theme }): string => (theme.font.bold.weight)};
  text-align: 'center';
`;

/**
 * @component
 * Used to render a single cell within the TableHead section on a table.
 * Inteded for column headers only; There is also a TableRowHeadingCell for
 * row heading components.
 */

const TableHeadingCell = withTheme(StyledTableHeadingCell);

declare type TableHeadingCell = ReactElement<TableHeadingCellProps>;

export default TableHeadingCell;
