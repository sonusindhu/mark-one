import React, {
  FunctionComponent, ReactElement, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';
import TableHead from './TableHead';
import { TableBody } from './TableBody';

export interface TableProps {
  /** Internal table components like <thead> and <tbody> including their respective child components */
  children: Array<TableHead | TableBody>;
}

const StyledTable = styled.table`
    border-collapse: collapse;
    padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
    width: 100%;
`;

const Table: FunctionComponent<TableProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTable theme={theme}>
      {children}
    </StyledTable>
  );
};

export default Table;
