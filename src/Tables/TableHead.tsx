import styled, { DefaultTheme, withTheme } from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow | TableRow[];
  /** The application theme */
  theme?: DefaultTheme;
}

const StyledTableHead = styled.thead`
  background-color: ${({ theme }): string => (theme.color.background.medium)};
`;

/**
 * @component
 * Renders a <thead> component to be used inside of a <Table>
 */

const TableHead:
ForwardRefExoticComponent<TableHeadProps> = withTheme(StyledTableHead);

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
