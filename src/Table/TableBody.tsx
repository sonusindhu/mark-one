import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import TableRow from './TableRow';

export interface TableBodyProps {
  /** Our TableRow functional component serves as the children for TableBody */
  children: TableRow;
  /** Controls whether to add a scrollbar in the case where the content of the
   * body does not fit within the table body
   */
  isScrollable: boolean;
}

const StyledTableBody = styled.tbody<TableBodyProps>`
  overflow: ${({ isScrollable }): string => (isScrollable ? 'scroll' : 'visible')};
`;

const TableBody: FunctionComponent<TableBodyProps> = (props): ReactElement => {
  const {
    children,
    isScrollable,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTableBody theme={theme} isScrollable={isScrollable}>
      {children}
    </StyledTableBody>
  );
};

export default TableBody;
