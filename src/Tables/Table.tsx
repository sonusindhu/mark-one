import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'Theme';
import TableHead from './TableHead';
import TableBody from './TableBody';

export interface TableProps {
  /**
  * Internal table components like <thead>, <tbody>, <col>. and <colgroup>
  * including their respective child components
  */
  children: Array<typeof TableHead | typeof TableBody | HTMLTableColElement>;
  /** The application theme */
  theme: BaseTheme;
}

const StyledTable = styled.table`
    border-collapse: collapse;
    padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
    width: 100%;
`;

/**
 * @component
 * Renders a simple, full-width <table>
 */

const Table = withTheme(StyledTable);

export default Table;
