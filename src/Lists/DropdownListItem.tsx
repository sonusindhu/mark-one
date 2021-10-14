import styled from 'styled-components';
import { fromTheme } from '../Theme';

/**
* Defines a child component of the DropdownList. The styling is minimal, though
* it can be wrapped and expanded for other implementations.
*/
const DropdownListItem = styled.li`
  padding: ${fromTheme('ws', 'small')};
`;

export type DropdownListItem = HTMLLIElement;
export default DropdownListItem;
