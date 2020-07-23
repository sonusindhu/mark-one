import styled from 'styled-components';
import { ReactElement } from 'react';

/**
 * @component
 * Renders a blank/transparent table data cell. Primarily intended for adding
 * blank space to use in complicated, multi-layer headers.
 */

const TableHeadingSpacer = styled.td`
  background-color: none;
  border: none;
  color: transparent;
  &:hover {
    background-color: none;
  }
`;

declare type TableHeadingSpacer = ReactElement<unknown>;

export default TableHeadingSpacer;
