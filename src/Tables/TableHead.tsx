import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import { fromTheme } from '../Theme';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow | TableRow[];
}

const StyledTableHead = styled.thead<TableHeadProps>`
  background-color: ${fromTheme('color', 'background', 'medium')};
`;

/**
 * @component
 * Renders a <thead> component to be used inside of a <Table>
 */

const TableHead:
ForwardRefExoticComponent<TableHeadProps> = StyledTableHead;

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
