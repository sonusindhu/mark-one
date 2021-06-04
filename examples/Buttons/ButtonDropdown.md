```jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const [currentMenuVisibility, setMenuVisibility] = useState(false);
const times = [
  {
    value: '09:00-10:00',
    label: '9:00AM-10:00AM',
  },
  {
    value: '10:00-11:00',
    label: '10:00AM-11:00AM',
  },
  {
    value: '11:00-12:00',
    label: '11:00AM-12:00PM',
  },
  {
    value: '12:00-13:00',
    label: '12:00PM-1:00PM',
  },
  {
    value: '13:00-14:00',
    label: '1:00PM-2:00PM',
  },
  ];

<ButtonDropdown
  onDropdownClick={function () {
    setMenuVisibility(!currentMenuVisibility);
  }}
  onChange={function(value) {
    alert('You chose ' + value);
    setMenuVisibility(false);
  }}
  options={times}
  isMenuVisible={currentMenuVisibility}
>
  <FontAwesomeIcon icon={faClock} size="sm" />
</ButtonDropdown>
```