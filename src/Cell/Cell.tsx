import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

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
  return (
    <StyledCell>
      {children}
    </StyledCell>
  );
};

export default Cell;
