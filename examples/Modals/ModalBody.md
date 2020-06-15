This is a very basic component that just adds padding to make the main content of the modal line up with the `<ModalHeader>` and `<ModalFooter>`. This is optional, as the user may want to handle the layout and spacing for the content on their own.

```jsx
import { useState } from 'react';
import { Button, Modal } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<div>
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
    <ModalBody>
      <p>Any content can be placed inside the Modal Body</p>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalBody>
  </Modal>
</div>
```

