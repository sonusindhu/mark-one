import {
  ReactElement, ForwardRefExoticComponent,
} from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';
import TableRowHeadingCell from './TableRowHeadingCell';
import TableCell from './TableCell';
import TableHeadingCell from './TableHeadingCell';
import TableHeadingSpacer from './TableHeadingSpacer';

export interface TableRowProps {
  /** Cell components to be displayed in the row */
  children: (
    TableCell | TableHeadingCell| TableRowHeadingCell | TableHeadingSpacer
  ) | (
    TableCell | TableHeadingCell| TableRowHeadingCell | TableHeadingSpacer
  )[];
  /**
   * Controls whether the background of the row has a darker background color
   * Inteded for use in long tables that help differentiate even/odd rows
   * */
  isStriped?: boolean;
  /**
   * By default, rows will highlight on hover. Setting this to true will
   * disable that behavior
   */
  noHighlight?: boolean;
  /** The application theme */
  theme?: BaseTheme;
}

const StyledTableRow = styled.tr<TableRowProps>`
  background: ${({ theme, isStriped }): string => (
    isStriped
      ? theme.color.background.subtle
      : theme.color.background.light)};
  &:hover {
    background: ${({ theme, noHighlight }): string => (
    noHighlight
      ? null
      : theme.color.background.medium)};
  }
`;

StyledTableRow.defaultProps = {
  isStriped: false,
};

/**
 * @component
 * Renders a <tr> element, for use inside the TableHead and TableBody
 * components.
 */

const TableRow:
ForwardRefExoticComponent<TableRowProps> = withTheme(StyledTableRow);

declare type TableRow = ReactElement<TableRowProps>;

export default TableRow;
