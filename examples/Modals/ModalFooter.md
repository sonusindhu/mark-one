This is a utility component for adding a footer row to the `<Modal>`. It's set up to use `flexbox`, and fill in buttons from right to left. For example:

```jsx
import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
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
    <ModalHeader>Modal Footer Example</ModalHeader>
    <ModalBody>
      <div>
        This can be any arbitrary content
      </div>
    </ModalBody>
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
</>
```

