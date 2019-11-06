import {
  ReactElement, ReactNode,
} from 'react';
import styled, { withTheme } from 'styled-components';

export interface TableRowProps {
  /** Cell components to be displayed in the row */
  children: ReactNode;
  /** Controls whether the background of the row has a darker background color */
  isStriped?: boolean;
}

const TableRow = styled.tr<TableRowProps>`
  background: ${({ theme, isStriped }): string => (isStriped ? theme.color.background.subtle : theme.color.background.light)};
  &:hover {
    background: ${({ theme }): string => (theme.color.background.medium)};
  }
`;

TableRow.defaultProps = {
  isStriped: false,
};

export type TableRow = ReactElement<TableRowProps>;

export default withTheme(TableRow);
