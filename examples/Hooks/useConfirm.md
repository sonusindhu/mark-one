```tsx
import { useState } from 'react';
import { Button, TextInput, useConfirm } from 'mark-one';

const {
  markAsChanged,
  confirmDiscard,
} = useConfirm();

const [text, setText] = useState('');

<div>
  <p>
    <em>After entering text in the field below, click Cancel to see the confirm changes dialog</em>
  </p>

  <div>
    <TextInput
      isLabelVisible
      label="Enter some text"
      value={text}
      onChange={({ target }) => {
        markAsChanged(true);
        setText(target.value);
      }}
    />
  </div>

  <div>
    <Button 
      onClick={() => {
        if (confirmDiscard()) {
          markAsChanged(false);
          setText('');
        }
      }}>
      Cancel 
    </Button>
  </div>
</div>
```
