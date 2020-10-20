Label example: The optional prop `labelPosition` defaults to `POSITION.TOP.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');

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
```

Label example: The prop `labelPosition` is set to `POSITION.TOP.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('fall');

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
  labelPosition={POSITION.TOP}
/>
```

Label example: The prop `labelPosition` is set to `POSITION.LEFT.`

```jsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const [value, setValue] = useState('fall');

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
  labelPosition={POSITION.LEFT}
/>
```

Label example: The `isLabelVisible` prop is set to `false.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');

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
```

Disabled property example: The 'Summer' selection is disabled. The optional `labelPosition` prop defaults to `POSITION.TOP.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');

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
```

Error Message example: The optional `errorMessage` prop is not set.

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');
import { POSITION } from 'mark-one';

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
  labelPosition={POSITION.TOP}
/>
```

Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop defaults to `POSITION.TOP.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');

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
```

Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop is set to `POSITION.LEFT.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');
import { POSITION } from 'mark-one';

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
  labelPosition={POSITION.LEFT}
  errorMessage="Error: Please select a semester."
/>
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop defaults to `POSITION.TOP.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');

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
```

Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`

```jsx
import { useState } from 'react';

const [value, setValue] = useState('fall');
import { POSITION } from 'mark-one';

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
  labelPosition={POSITION.LEFT}
  isRequired
/>
```

Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown.

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
    forwardRef={ref}
  />
</>
```

Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown in the modal.

```jsx
import { useState, useRef, } from 'react';
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
