import styled from 'styled-components';
import { fromTheme } from '../Theme';

/**
* Defines a primitive floating list component, which can be used in
* implementing a dropdown by selectively rendering it, or wrapping it and
* providing a conditionaly display value.
*/

const DropdownList = styled.ul`
  background: ${fromTheme('color', 'background', 'light')};
  border: ${fromTheme('border', 'hairline')};
  min-height: 3em;
  min-width: 6em;
  position: absolute;
  transform: translate3d(0em, 0.1em, 0em);
  z-index: 100;
  list-style-type: none;
`;

export default DropdownList;
