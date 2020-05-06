import styled from 'styled-components';

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

export default TableHeadingSpacer;
