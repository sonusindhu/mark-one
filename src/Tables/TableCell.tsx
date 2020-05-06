import {
  ReactNode,
} from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';

/** Represents the possible values for TableCell's text-align property */
export enum ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface TableCellProps {
  /**
   * Allows you to pass in a alignment property from the ALIGN enum.
   * Defaults to LEFT
   */
  alignment?: ALIGN;
  /** Specifies the background color of the table cell */
  backgroundColor?: string;
  /** Text or components to be displayed in the cell */
  children: ReactNode;
  /** The application theme */
  theme: BaseTheme;
}

const StyledCell = styled.td<TableCellProps>`
  border-left: ${({ theme }): string => (theme.border.light)};
  border-right: ${({ theme }): string => (theme.border.light)};
  font-family: ${({ theme }): string => (theme.font.data.family)};
  font-size: ${({ theme }): string => (theme.font.data.size)};
  padding: ${({ theme }): string => (theme.ws.xsmall)};
  text-align: ${({ alignment }): string => alignment};
  background-color: ${({ backgroundColor }): string => backgroundColor};
`;

StyledCell.defaultProps = {
  alignment: ALIGN.LEFT,
};

/**
 * @component
 * Renders a single <td> element, for use inside of a <TableRow>
 */

const TableCell = withTheme(StyledCell);

export default TableCell;
