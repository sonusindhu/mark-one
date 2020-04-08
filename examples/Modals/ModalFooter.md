This is a utility component for adding a footer row to the `<Modal>`. It's set up to use `flexbox`, and fill in buttons from right to left. For example:

```jsx
import { useState } from 'react';
import { Button, Modal, ModalHeader } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<div>
  <Button onClick={() => {setModalVisible(true)}}>
    Open Modal
  </Button>
  <Modal
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader>Modal Footer Example</ModalHeader>
    <div>
      This can be any arbitrary content
    </div>
    <ModalFooter>
      <Button onClick={() => setModalVisible(false)}>
        One
      </Button>
      <Button onClick={() => setModalVisible(false)}>
        Two
      </Button>
      <Button onClick={() => setModalVisible(false)}>
        Three
      </Button>
    </ModalFooter>
  </Modal>
</div>
```

