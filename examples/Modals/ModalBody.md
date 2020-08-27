This is a very basic component that just adds padding to make the main content of the modal line up with the `<ModalHeader>` and `<ModalFooter>`. This is optional, as the user may want to handle the layout and spacing for the content on their own.

```jsx
import { useState } from 'react';
import { Button, Modal } from 'mark-one';

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
    <ModalBody>
      <p>Any content can be placed inside the Modal Body</p>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalBody>
  </Modal>
</>
```

Overflow example: When the contents of the modal body exceeds the height of the page, the user can scroll to see the full contents of the modal.
```jsx
import { useState } from 'react';
import { Button, ModalHeader, Modal, Fieldset, Checkbox } from 'mark-one';

const [modalVisible, setModalVisible] = useState(false);

<>
  <Button
    id="overflowTestButton"
    onClick={() => {setModalVisible(true)}}
  >
    Open Modal
  </Button>
  <Modal
    ariaLabelledBy="overflowTestButton"
    closeHandler={() => {setModalVisible(false)}}
    isVisible={modalVisible}
  >
    <ModalHeader>Overflow Example</ModalHeader>
    <ModalBody>
      <>
        <Fieldset
          legend="Fieldset Legend"
          isBorderVisible={false}
          isLegendVisible={false}
        >
          <Checkbox
          label="Option 1"
          disabled
          checked
          />
          <Checkbox
          label="Option 2"
          disabled
          checked
          />
          <Checkbox
          label="Option 3"
          disabled
          checked
          />
          <Checkbox
          label="Option 4"
          disabled
          checked
          />
          <Checkbox
          label="Option 5"
          disabled
          checked
          />
          <Checkbox
          label="Option 6"
          disabled
          checked
          />
          <Checkbox
          label="Option 7"
          disabled
          checked
          />
          <Checkbox
          label="Option 8"
          disabled
          checked
          />
          <Checkbox
          label="Option 9"
          disabled
          checked
          />
          <Checkbox
          label="Option 10"
          disabled
          checked
          />
          <Checkbox
          label="Option 11"
          disabled
          checked
          />
          <Checkbox
          label="Option 12"
          disabled
          checked
          />
          <Checkbox
          label="Option 13"
          disabled
          checked
          />
          <Checkbox
          label="Option 14"
          disabled
          checked
          />
          <Checkbox
          label="Option 15"
          disabled
          checked
          />
        </Fieldset>
      </>
      <Button onClick={() => setModalVisible(false)}>
        Close Modal
      </Button>
    </ModalBody>
  </Modal>
</>
```


