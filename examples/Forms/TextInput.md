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

Ref example: When the button is clicked, the focus shifts from the button itself to
the text input field.
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
Ref example: When the button is clicked, the focus shifts from the button itself to
the text input field inside a modal.
```jsx
  import { useState, useRef, } from 'react';
  import { Button, Modal, ModalBody, } from 'mark-one';

  const RefExample = () => {
    const ref = useRef(null);
    const [value, setValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const onButtonClick = () => {
      setModalVisible(true);
      // Since modal may not have been rendered in DOM, wait for it to be rendered
      // by letting next task of event queue run first
      setTimeout(() => ref.current.focus(), 0);
    }
    return (
      <>
        <Button onClick={onButtonClick}>Focus the input</Button>
        <Modal
          ariaLabelledBy="testButton"
          closeHandler={() => {setModalVisible(false)}}
          isVisible={modalVisible}
        >
          <ModalBody>
            <TextInput
              value={value}
              name="example"
              label="Description:"
              onChange={(event) => {
                setValue(event.target.value);
              }}
              forwardRef={ref}
            />
            <Button onClick={() => setModalVisible(false)}>
              Close Modal
            </Button>
          </ModalBody>
        </Modal>
      </>
    );
  };
  <RefExample />
```