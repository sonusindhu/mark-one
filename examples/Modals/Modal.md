The Modal component renders an overlay box that can be used to call out information to the user. Background content will be dimmed, and clicking outside of the modal box will cause the modal to disappear.

The Modal itself has very little styling applied to it. This is intentional. The idea is that the `<Modal>` component should only be concerned with the open/close behavior, and any styles can be set on the `children` components. For this purpose, we also have defined specific `<ModalHeader>`, `<ModalBody>`, and `<ModalFooter>` components.

The `isVisible` prop will be used by the parent component to control whether or not the modal should be displayed. In most cases, this will be done using React's `useState` hook, as in this example:

```jsx
import { useState } from 'react';
import { 
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<div>
  <Button onClick={() => {setModalVisible(true)}}>
    Open Modal
  </Button>
  <Modal
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader>Modal Example 1</ModalHeader>
    <ModalBody>
      <div>This can be any arbitrary content</div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</div>
```

### Open/Close handlers

You can also pass in `onOpen` and `onClose` handlers that will be called when the modal is opened and closed. These can be used for cases where you need to fetch some data in the background on open, or if you want to clear the values from a form on close:

```jsx
import { useState } from 'react';
import { 
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  TextInput,
} from 'mark-one';

const [modalCount, setModalCount] = useState(0);
const [modalVisible, setModalVisible] = useState(false);
const [formValue, setFormValue] = useState('');

<div>
  <Button onClick={() => {setModalVisible(true)}}>
    Open Modal
  </Button>
  <Modal
    onOpen={() => {setModalCount(modalCount + 1)}}
    onClose={() => { setFormValue('') }}
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader
      closeButtonHandler={()=> {setModalVisible(false)}}
    >
      Modal Example 2
    </ModalHeader>
    <ModalBody>
      <div>
        Any text entered here will be cleared when the modal closes
      </div>
      <div>
        <TextInput
          label="Enter text:"
          value={formValue}
          onChange={(evt) => {
            setFormValue(evt.target.value);
          }}
        />
      </div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
  <p>
    <strong>
      Modal open count: {modalCount}
    </strong>
  </p>
</div>
```
