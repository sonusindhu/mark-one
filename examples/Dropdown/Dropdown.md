```jsx
      import { useState } from 'react';
      import { Label } from 'mark-one';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
          <Label
            htmlFor="semesters"
            label="Semester:"
          >
          <Dropdown
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
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
        />
        </Label>
        );
      }
      <DropdownExample />
```
