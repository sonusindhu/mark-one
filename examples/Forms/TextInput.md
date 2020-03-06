The following is an example of the TextInput component that includes the optional `errorMessage` property. 
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('59390');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      errorMessage="Error: Please enter a valid ID"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component that does not include the optional `errorMessage` property. 
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component with the `labelPosition` prop not set. In this case, `labelPosition` defaults to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description:"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component with the `labelPosition` set to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description:"
      labelPosition="left"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component with the `labelPosition` set to `POSITION.TOP.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description:"
      labelPosition="top"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component with the `isLabelVisible` prop set to `false.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description:"
      isLabelVisible={false}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

The following is an example of the TextInput component with the `disabled` prop set to `true.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description:"
      disabled="disabled"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```
