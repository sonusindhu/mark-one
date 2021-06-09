The following is an example of the `ButtonDropdownMenu` component being used to outline timeslots. When the user clicks the button, a menu dropdown appears containing timeslot options. If the user clicks outside the menu, selects an item in the menu, or clicks the button that opened the menu a second time, the menu will minimize. Users can determine behavior when an option in the dropdown is selected.
```jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ButtonDropdownMenuItem } from 'mark-one';

const times = [
  { 
    startTime: '09:00',
    endTime: '10:00',
    value: '09:00-10:00',
    label: '9:00AM-10:00AM',
  },
  {
    startTime: '10:00',
    endTime: '11:00',
    value: '10:00-11:00',
    label: '10:00AM-11:00AM',
  },
  {
    startTime: '11:00',
    endTime: '12:00',
    value: '11:00-12:00',
    label: '11:00AM-12:00PM',
  },
  {
    startTime: '12:00',
    endTime: '13:00',
    value: '12:00-13:00',
    label: '12:00PM-1:00PM',
  },
  {
    startTime: '13:00',
    endTime: '14:00',
    value: '13:00-14:00',
    label: '1:00PM-2:00PM',
  },
  ];

<ButtonDropdownMenu
  alt="Timeslot button dropdown"
  label={<FontAwesomeIcon icon={faClock} size="sm" />}
>
  {times.map(({ label, startTime, endTime, value }) => (
    <ButtonDropdownMenuItem
      onClick={function() {
        alert('You chose ' + startTime + '-' + endTime);
      }}
      key={label}
      label={label}
      value={value}
    />
  ))}
</ButtonDropdownMenu>
```
