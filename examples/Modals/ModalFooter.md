This is a utility component for adding a footer row to the `<Modal>`. It's set up to use `flexbox`, and fill in buttons from right to left. For example:

```jsx
import { useState } from 'react';
import { Button } from 'mark-one';
import Modal from '../../src/Modals/Modal.tsx';

const TestModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => {setModalVisible(true)}}>
        Open Modal
      </Button>
      <Modal
        closeHandler={() => {setModalVisible(false)}}
        isVisible={modalVisible}
      >
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
  );
}

<TestModal />
```

