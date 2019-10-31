import React, {
  FunctionComponent, MouseEventHandler, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface TableHeadingCellProps {
  /** Text or components to be displayed in the table heading cell */
  children: ReactNode;
  /** Function to call on click event */
  clickHandler?: MouseEventHandler;
  /** Specifies the group of cells that the table heading refers to */
  scope: 'row' | 'col' | 'rowgroup' | 'colgroup' | 'auto';
}

const StyledTableHeadingCell = styled.td`

`;
const TableHeadingCell: FunctionComponent<TableHeadingCellProps> = (props):
ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTableHeadingCell theme={theme}>
      {children}
    </StyledTableHeadingCell>
  );
};

export default TableHeadingCell;
