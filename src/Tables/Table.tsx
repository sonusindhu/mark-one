import styled from 'styled-components';
import { ReactElement, ForwardRefExoticComponent } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableProps {
  /**
  * Internal table components like <thead>, <tbody>, <col>. and <colgroup>
  * including their respective child components
  */
  children: (TableHead | TableBody | HTMLTableColElement)
  | (TableHead | TableBody | HTMLTableColElement)[];
}

const StyledTable = styled.table<TableProps>`
    border-collapse: collapse;
    padding: ${({ theme }) => (theme.ws.xsmall + ' ' + theme.ws.small)};
    width: 100%;
`;

/**
 * @component
 * Renders a simple, full-width <table>
 */

const Table: ForwardRefExoticComponent<TableProps> = StyledTable;

declare type Table = ReactElement<TableProps>;

export default Table;
