import { ReactElement, ForwardRefExoticComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';
import TableRow from './TableRow';

export interface TableBodyProps {
  /** Our TableRow functional component serves as the children for TableBody */
  children: TableRow | TableRow[];
  /** Controls whether to add a scrollbar in the case where the content of the
   * body does not fit within the table body
   */
  isScrollable?: boolean;
  /** The application theme */
  theme?: BaseTheme;
}

const StyledTableBody = styled.tbody<TableBodyProps>`
  border: ${({ theme }): string => (theme.border.light)};
  overflow: ${({ isScrollable }): string => (isScrollable ? 'scroll' : 'visible')};
`;

/**
 * @component
 * Renders a <tbody> component for use inside the <Table> component.
 */
const TableBody: ForwardRefExoticComponent<
TableBodyProps
> = withTheme(StyledTableBody);

TableBody.defaultProps = {
  isScrollable: false,
};

declare type TableBody = ReactElement<TableBodyProps>;

export default TableBody;
