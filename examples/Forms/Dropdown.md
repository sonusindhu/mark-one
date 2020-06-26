Label example: The optional prop `labelPosition` defaults to `POSITION.TOP.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
        />
        );
      }
      <DropdownExample />
```

Label example: The prop `labelPosition` is set to `POSITION.TOP.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          labelPosition="top"
        />
        );
      }
      <DropdownExample />
```

Label example: The prop `labelPosition` is set to `POSITION.LEFT.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          labelPosition="left"
        />
        );
      }
      <DropdownExample />
```


Label example: The `isLabelVisible` prop is set to `false.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          isLabelVisible={false}
        />
        );
      }
      <DropdownExample />
```

Disabled property example: The 'Summer' selection is disabled. The optional `labelPosition` prop defaults to `POSITION.TOP.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          label="Semester"
        />
        );
      }
      <DropdownExample />
```

Error Message example: The optional `errorMessage` prop is not set.
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          labelPosition="top"
        />
        );
      }
      <DropdownExample />
```

Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop defaults to `POSITION.TOP.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          errorMessage="Error: Please select a semester."
        />
        );
      }
      <DropdownExample />
```

Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          labelPosition="left"
          errorMessage="Error: Please select a semester."
        />
        );
      }
      <DropdownExample />
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop defaults to `POSITION.TOP.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          isRequired
        />
        );
      }
      <DropdownExample />
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
      import { useState } from 'react';
      function DropdownExample() {
        const [value, setValue] = useState('fall');
        return (
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
          ]}
          value={value}
          id="semesters"
          name="semesters"
          onChange={function(event){
            setValue(event.target.value);
            alert('You changed the selection to ' + event.target.value);
          }}
          label="Semester"
          labelPosition="left"
          isRequired
        />
        );
      }
      <DropdownExample />
```