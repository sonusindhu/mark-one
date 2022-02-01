Basic multi-line text box

```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('CS50 is an on-campus and online introductory course on computer science taught at Harvard University and Yale University.');

<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Multi-line text box with an error
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('');

<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  errorMessage="Please provide a value for this field"
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Multi-line text box with a hidden error
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('');

<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  errorMessage="Please provide a value for this field"
  hideError
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```


Multi-line text box with a hidden label
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('');

<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  isLabelVisible={false}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Multi-line text box with a hidden label
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('');


<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  isLabelVisible={false}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Required multi-line text box
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('');


<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  isLabelVisible={false}
  isRequired
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Disabled multi-line text box
```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('Some text that you can\'t change');

<MultiLineTextInput
  value={value}
  id="course-notes"
  label="Course notes"
  isDisabled
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```

Multi-line text box using `useRef` to focus the element programatically
```jsx
import { MultiLineTextInput, Button, VARIANT } from 'mark-one';
import { useState, useRef } from 'react';

const [value, setValue] = useState('');

const ref = useRef(null);
const onButtonClick = () => {
  if (ref.current) {
    ref.current.focus();
  }
};
<>
  <Button
    id="testButton"
    onClick={onButtonClick}
    variant={VARIANT.INFO}
  >
    Focus the input
  </Button>
  <MultiLineTextInput
    id="text input"
    onChange={() => {}}
    forwardRef={ref}
  />
</>
```
