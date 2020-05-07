import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';
import { ReactElement } from 'react';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow | TableRow[];
  /** The application theme */
  theme: BaseTheme;
}

const StyledTableHead = styled.thead`
  background-color: ${({ theme }): string => (theme.color.background.medium)};
`;

/**
 * @component
 * Renders a <thead> component to be used inside of a <Table>
 */

const TableHead = withTheme(StyledTableHead);

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
