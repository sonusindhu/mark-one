The following is a dropdown example in which the selection defaults to 'Fall', and the 'Summer' selection is disabled.
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
          <label
            htmlFor="semesters"
          >
          Semester:
          <Dropdown
          options={[
            {
              value: 'all',
              label: 'All',
            },
            {
              value: 'fall',
              label: 'Fall',
            },
            {
              value: 'spring',
              label: 'Spring',
            },
            {
              value: 'summer',
              label: 'Summer',
              disabled: true,
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
        </label>
        );
      }
      <DropdownExample />
```
