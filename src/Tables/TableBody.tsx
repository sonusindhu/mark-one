import {
  ReactElement,
} from 'react';
import styled, { withTheme } from 'styled-components';
import { TableRow } from './TableRow';

export interface TableBodyProps {
  /** Our TableRow functional component serves as the children for TableBody */
  children: TableRow[];
  /** Controls whether to add a scrollbar in the case where the content of the
   * body does not fit within the table body
   */
  isScrollable?: boolean;
}

const StyledTableBody = styled.tbody<TableBodyProps>`
  border: ${({ theme }): string => (theme.border.light)};
  overflow: ${({ isScrollable }): string => (isScrollable ? 'scroll' : 'visible')};
`;

TableBody.defaultProps = {
  isScrollable: false,
};

export type TableBody = ReactElement<TableBodyProps>;

export default withTheme(TableBody);
