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
      onChange={function(event){
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
      onChange={function(event){
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```