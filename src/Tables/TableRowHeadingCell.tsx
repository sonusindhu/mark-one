import {
  ReactNode, ReactElement, ForwardRefExoticComponent,
} from 'react';
import styled, { withTheme, DefaultTheme } from 'styled-components';
import { ALIGN, VALIGN } from './TableCell';
import { fromTheme } from '../Theme/utils';

export interface TableRowHeadingCellProps {
  /** Allows you to pass in a alignment property from the ALIGN enum */
  alignment?: ALIGN;
  /** Allows for customizing the vertal alignment of the cell content */
  verticalAlignment?: VALIGN;
  /** Specifies the background color of the table cell */
  backgroundColor?: string;
  /** Text or components to be displayed in the table heading cell */
  children: ReactNode;
  /** Handles cells that span multiple columns */
  colSpan?: string | number;
  /** Handles cells that span multiple rows */
  rowSpan?: string | number;
  /** Specifies the group of cells that the row heading refers to */
  scope: 'row' | 'rowgroup' | 'auto';
  /** The application theme */
  theme?: DefaultTheme;
}

const StyledTableRowHeadingCell = styled.th<TableRowHeadingCellProps>`
  border-left: ${fromTheme('border', 'light')};
  border-right: ${fromTheme('border', 'light')};
  font-weight: ${fromTheme('font', 'data', 'weight')};
  font-family: ${fromTheme('font', 'data', 'family')};
  font-size: ${fromTheme('font', 'data', 'size')};
  text-align: ${({ alignment }) => alignment};
  vertical-align: ${({ verticalAlignment }) => verticalAlignment};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

StyledTableRowHeadingCell.defaultProps = {
  alignment: ALIGN.LEFT,
  verticalAlignment: VALIGN.CENTER,
};
/**
 * @component
 * Renders a <th> element that is stylistically similar to the TableCell
 * component, for use as a row-level header.
 */
const TableRowHeadingCell: ForwardRefExoticComponent<
TableRowHeadingCellProps
> = withTheme(StyledTableRowHeadingCell);

declare type TableRowHeadingCell = ReactElement<TableRowHeadingCellProps>;

export default TableRowHeadingCell;
