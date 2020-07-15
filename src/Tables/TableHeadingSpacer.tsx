import styled from 'styled-components';
import { ReactElement } from 'react';

/**
 * @component
 * Renders a blank/transparent table data cell. Primarily intended for adding
 * blank space to use in complicated, multi-layer headers.
 */

const TableHeadingSpacer: StyledComponent<'td', {}> = styled.td`
  background-color: none;
  border: none;
  color: transparent;
  &:hover {
    background-color: none;
  }
`;

declare type TableHeadingSpacer = ReactElement<{}>;

export default TableHeadingSpacer;
