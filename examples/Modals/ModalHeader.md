This is a utility component for adding a header to the `<Modal>`. The text inside the header will be rendered inside an `<h2>` component, and if an optional `closeButtonHandler` prop is passed in, it will render an `X` button in the top-right corner.

### Without the `closeButtonHandler`

```jsx
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
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
    <ModalHeader>Modal Header without Close</ModalHeader>
    <ModalBody>
      <div>
        This can be any arbitrary content
      </div>
    </ModalBody>
    <ModalFooter>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</>
```

### With the `closeButtonHandler`

```jsx
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
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
    <ModalHeader
      closeButtonHandler={() => {setModalVisible(false)}}
    >
      Modal Header with Close Button →
    </ModalHeader>
    <ModalBody>
      <div>
        This can be any arbitrary content
      </div>
    </ModalBody>
  </Modal>
</>
```
