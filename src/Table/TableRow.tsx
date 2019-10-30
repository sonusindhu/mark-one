import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface RowProps {
  /** Cell components to be displayed in the row */
  children: ReactNode;
  /** Controls whether the background of the row has a darker background color */
  isStriped?: boolean;
}

const StyledRow = styled.tr<RowProps>`
  background: ${({ theme, isStriped }): string => (isStriped ? theme.color.background.subtle : theme.color.background.light)};
  &:hover {
    background: ${({ theme }): string => (theme.color.background.medium)};
  }
`;

const TableRow: FunctionComponent<RowProps> = (props): ReactElement => {
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

export default TableRow;
