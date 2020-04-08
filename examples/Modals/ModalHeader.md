This is a utility component for adding a header to the `<Modal>`. The text inside the header will be rendered inside an `<h2>` component, and if an optional `closeButtonHandler` prop is passed in, it will render an `X` button in the top-right corner.

### Without the `closeButtonHandler`

```jsx
import { useState } from 'react';
import { Button, Modal, ModalFooter } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<div>
  <Button onClick={() => {setModalVisible(true)}}>
    Open Modal
  </Button>
  <Modal
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader>Modal Header without Close</ModalHeader>
    <div>
      This can be any arbitrary content
    </div>
    <ModalFooter>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalFooter>
  </Modal>
</div>
```

### With the `closeButtonHandler`

```jsx
import { useState } from 'react';
import { Button, Modal } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<div>
  <Button onClick={() => {setModalVisible(true)}}>
    Open Modal
  </Button>
  <Modal
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader
      closeButtonHandler={() => {setModalVisible(false)}}
    >
      Modal Header with Close Button →
    </ModalHeader>
    <div>
      This can be any arbitrary content
    </div>
  </Modal>
</div>
```
