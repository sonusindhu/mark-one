```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (<Dropdown
          options={[
            {
              value: 'all', label: 'All',
            },
            {
              value: 'fall', label: 'Fall',
            },
            {
              value: 'spring', label: 'Spring',
            },
          ]}
          value={value}
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
        />);
      }
      <DropdownExample />
```
