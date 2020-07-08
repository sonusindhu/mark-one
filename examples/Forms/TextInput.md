Label example: The optional `labelPosition` prop defaults to `POSITION.LEFT.`
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

Label example: The prop `labelPosition` is set to `POSITION.LEFT.`
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

Label example: The prop `labelPosition` is set to `POSITION.TOP.`
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

Label example: The `isLabelVisible` prop is set to `false.`
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

Text Input example: The `disabled` prop set to `true.`
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

Error Message example: The optional `errorMessage` prop is not set.
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

Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop defaults to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Invalid value');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      errorMessage="Error: Please enter a valid ID"
      label="Description:"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop is set to `POSITION.TOP.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Invalid value');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      errorMessage="Error: Please enter a valid ID"
      label="Description:"
      labelPosition="top"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />);
  }
  <TextInputExample />
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.TOP.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description"
      onChange={(event) => {
        setValue(event.target.value);
      }}
      labelPosition="top"
      isRequired
    />);
  }
  <TextInputExample />
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const TextInputExample = () => {
    const [value, setValue] = useState('Some valid input');
    return (<TextInput
      value={value}
      name="example"
      id="example"
      label="Description"
      onChange={(event) => {
        setValue(event.target.value);
      }}
      labelPosition="left"
      isRequired
    />);
  }
  <TextInputExample />
```

Ref example
```jsx
  import { useState, useRef, } from 'react';
  import { Button } from 'mark-one';
  const RefExample = () => {
    const ref = useRef(null);
    const [value, setValue] = useState('');
    const onButtonClick = () => {
      ref.current.focus();
    }
    return (
      <>
        <Button onClick={onButtonClick}>Focus the input</Button>
        <TextInput
            value={value}
            name="example"
            label="Description:"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            forwardRef={ref}
          />
      </>
    );
  };
  <RefExample />
```