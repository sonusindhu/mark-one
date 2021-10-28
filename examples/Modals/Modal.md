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

<>
  <Button
    id="testButton"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="testButton"
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
</>
```

### Open/Close effects

If you need to run additional code when the modal is opened and closed (e.g. focus an input on open, or clear the values from a form on close), you'll need to do so in the parent function that controls the `isVisible` prop.

```jsx
import { useState, useRef } from 'react';
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  TextInput,
} from 'mark-one';

const inputRef = useRef(null);
const [modalVisible, setModalVisible] = useState(false);
const [formValue, setFormValue] = useState('');

const switchModal = (isOpen) => {
  setModalVisible(isOpen);
  if (isOpen) {
    setTimeout(() => { inputRef.current.focus() }, 500)
  } else {
    setFormValue('');
  }
}

<>
  <Button
    id="testButton"
    onClick={() => { switchModal(true) }}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="testButton"
    closeHandler={() => { switchModal(false) }}
    isVisible={modalVisible}
  >
    <ModalHeader
      closeButtonHandler={() => { switchModal(false) }}
    >
      Modal Example 2
    </ModalHeader>
    <ModalBody>
      <div>
        Any text entered here will be cleared when the modal closes
      </div>
      <div>
        <TextInput
          forwardRef={inputRef}
          label="Enter text:"
          value={formValue}
          changeHandler={(evt) => {
            setFormValue(evt.target.value);
          }}
        />
      </div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={() => { switchModal(false) }}>
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</>
```

### Prompt before closing

The `useConfirm` hook can be used to track changes to data and prompt the user to confirm that they want to discard those changes before closing the modal.

```tsx
import { useState, useRef } from 'react';
import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  TextInput,
  useConfirm,
} from 'mark-one';

const inputRef = useRef(null);
const [modalVisible, setModalVisible] = useState(false);
const [formValue, setFormValue] = useState('');
const { markAsChanged, confirmDiscard } = useConfirm();

const switchModal = (isOpen) => {
  setModalVisible(isOpen);
  if (isOpen) {
    setTimeout(() => { inputRef.current.focus() }, 500)
  } else {
    setFormValue('');
  }
}

<>
  <Button
    id="testButton"
    onClick={() => { switchModal(true) }}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="testButton"
    closeHandler={() => { 
      if (confirmDiscard()) {
        switchModal(false)
      }
    }}
    isVisible={modalVisible}
  >
    <ModalHeader
      closeButtonHandler={() => { 
        if (confirmDiscard()) {
          switchModal(false)
        }
    }}
    >
      Modal Example 3
    </ModalHeader>
    <ModalBody>
      <div>
        After entering text here, you'll be prompted to confirm before closing the modal
      </div>
      <div>
        <TextInput
          forwardRef={inputRef}
          label="Enter text:"
          value={formValue}
          onChange={(evt) => {
            markAsChanged(true);
            setFormValue(evt.target.value);
          }}
        />
      </div>
    </ModalBody>
    <ModalFooter>
      <Button 
        onClick={() => { 
          if(confirmDiscard()) {
            switchModal(false)
          }
        }}
      >
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</>
```
