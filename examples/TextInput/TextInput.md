```jsx
  import { useState } from 'react';
  function TextInputExample() {
    const [value, setValue] = useState('example');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      onChange={function(event){
        setValue(event.target.value);
        alert('You changed the selection to ' + event.target.value);
      }}
    />);
  }
  <TextInputExample />
```