The following is an example of the `ButtonDropdown` component being used to outline timeslots. When the user clicks the button, a menu dropdown appears containing timeslot options. If the user clicks outside the menu, selects an item in the menu, or clicks the button that opened the menu a second time, the menu will minimize. Users can determine behavior when an option in the dropdown is selected.
```jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

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
  alt="Timeslot button dropdown"
  onChange={function(value) {
    alert('You chose ' + value);
  }}
  options={times}
>
  <FontAwesomeIcon icon={faClock} size="sm" />
</ButtonDropdown>
```