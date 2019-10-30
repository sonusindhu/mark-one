import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface CellProps {
  /** Text or components to be displayed in the cell */
  children: ReactNode;
}

const StyledCell = styled.td`
  border: ${({ theme }): string => (theme.border.hairline)};
  font-family: ${({ theme }): string => (theme.font.data.family)};
  font-size: ${({ theme }): string => (theme.font.data.size)};
  padding: ${({ theme }): string => (theme.ws.xsmall)};
  text-align: 'center';
`;

const Cell: FunctionComponent<CellProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledCell theme={theme}>
      {children}
    </StyledCell>
  );
};

export default Cell;
