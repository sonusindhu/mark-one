import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface TableRowProps {
  /** Cell components to be displayed in the row */
  children: ReactNode;
  /** Controls whether the background of the row has a darker background color */
  isStriped?: boolean;
}

const StyledRow = styled.tr<TableRowProps>`
  background: ${({ theme, isStriped }): string => (isStriped ? theme.color.background.subtle : theme.color.background.light)};
  &:hover {
    background: ${({ theme }): string => (theme.color.background.medium)};
  }
`;

const TableRow: FunctionComponent<TableRowProps> = (props): ReactElement => {
  const {
    children,
    isStriped,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledRow theme={theme} isStriped={isStriped}>
      {children}
    </StyledRow>
  );
};

TableRow.defaultProps = {
  isStriped: false,
};

declare type TableRow = ReactElement<TableRowProps>;

export default TableRow;
