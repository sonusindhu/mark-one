import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';
import { TableRow } from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow;
}

const StyledTableHead = styled.thead`
  background-color: ${({ theme }): string => (theme.color.background.medium)};
`;

const TableHead: FunctionComponent<TableHeadProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTableHead theme={theme}>
      {children}
    </StyledTableHead>
  );
};

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
