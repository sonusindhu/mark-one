import React, {
  FunctionComponent, ReactElement,
} from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';

export interface TableHeadProps {
  /** Our TableRow functional component serves as the children for TableHead */
  children: TableRow;
}

const StyledTableHead = styled.thead`
  background-color: theme.color.background.medium;
`;

const TableHead: FunctionComponent<TableHeadProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  return (
    <StyledTableHead>
      {children}
    </StyledTableHead>
  );
};

declare type TableHead = ReactElement<TableHeadProps>;

export default TableHead;
