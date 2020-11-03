Label example: The optional `labelPosition` prop defaults to `POSITION.LEFT.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Label example: The prop `labelPosition` is set to `POSITION.LEFT.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  labelPosition={POSITION.LEFT}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Label example: The prop `labelPosition` is set to `POSITION.TOP.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  labelPosition={POSITION.TOP}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Label example: The `isLabelVisible` prop is set to `false.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  isLabelVisible={false}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Text Input example: The `disabled` prop set to `true.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  disabled="disabled"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Error Message example: The optional `errorMessage` prop is not set.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop defaults to `POSITION.LEFT.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Invalid value');

<TextInput
  value={value}
  name="example"
  id="example"
  errorMessage="Error: Please enter a valid ID"
  label="Description:"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop is set to `POSITION.TOP.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('Invalid value');

<TextInput
  value={value}
  name="example"
  id="example"
  errorMessage="Error: Please enter a valid ID"
  label="Description:"
  labelPosition={POSITION.TOP}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Error Message example: The optional `errorMessage` prop is not set, and the 
`hideError` prop is set to `true`, which changes the errorMessage style.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  hideError={true}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Error Message example: The optional `errorMessage` and `hideError` props 
are set to `true`, while `isLabelVisible` prop is set to false which removes 
the errorMessage and its style.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description:"
  errorMessage="Error: Please enter a valid ID"
  hideError={true}
  isLabelVisible={false}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.TOP.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description"
  onChange={(event) => {
    setValue(event.target.value);
  }}
  labelPosition={POSITION.TOP}
  isRequired
/>
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';


const [value, setValue] = useState('Some valid input');

<TextInput
  value={value}
  name="example"
  id="example"
  label="Description"
  onChange={(event) => {
    setValue(event.target.value);
  }}
  labelPosition={POSITION.LEFT}
  isRequired
/>
```

Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts from the button itself to the text input field.

```jsx
import { useState, useRef } from 'react';
import { Button, VARIANT } from 'mark-one';

const ref = useRef(null);
const [value, setValue] = useState('');
const onButtonClick = () => {
  ref.current.focus();
}

<>
  <Button
    onClick={onButtonClick}
    variant={VARIANT.INFO}
  >
    Focus the input
  </Button>
  <TextInput
    id="example"
    value={value}
    name="example"
    label="Description:"
    onChange={(event) => {
      setValue(event.target.value);
    }}
    forwardRef={ref}
  />
</>
```

Ref example: The optional `forwardRef` property is set. When the button is clicked, the focus shifts from the button itself to the text input field inside a modal.

```jsx
import { useState, useRef } from 'react';
import { Button, Modal, ModalBody, VARIANT } from 'mark-one';

const ref = useRef(null);
const [value, setValue] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const onButtonClick = () => {
  setModalVisible(true);
  /* Since modal may not have been rendered in DOM, wait for it to be
  rendered by letting next task of event queue run first */
  setTimeout(() => ref.current.focus(), 0);
}

<>
  <Button
    onClick={onButtonClick}
    variant={VARIANT.INFO}
  >
    Focus the input
  </Button>
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
      <Button
        onClick={() => setModalVisible(false)}
        variant={VARIANT.BASE}
      >
        Close Modal
      </Button>
    </ModalBody>
  </Modal>
</>
```

