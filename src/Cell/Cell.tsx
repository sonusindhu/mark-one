import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface CellProps {
  /** Text or components to be displayed in the cell */
  children: ReactNode;
}

const StyledCell = styled.td`
  border: ;
  font-family: ;
  font-size: ;
  padding: ;
  text-align: ;
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
