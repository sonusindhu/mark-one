import styled from 'styled-components';
import ListItem from './ListItem';
import { fromTheme } from '../Theme';

export interface ListProps {
  /**
   * Should only contain ListItems
   */
  children: ListItem | ListItem[];
  /**
  * Whether this list is ordered (true) or unordered (false)
  */
  ordered?: boolean;
}

/**
* Renders either an ordered or unordered list component, depending on the value
* of the "ordered" prop. Both list types are styled identically, but the
* difference is important semantically
*/

const List = styled.ol.attrs(
  ({ ordered }: ListProps) => (
    {
      as: ordered ? 'ol' : 'ul',
    }
  )
)<ListProps>`
  list-style: none;
  > li {
    border-top: ${fromTheme('border', 'hairline')};
    &:first-child {
      border-top: none;
    }
  }
`;

List.defaultProps = {
  ordered: false,
};

export default List;
