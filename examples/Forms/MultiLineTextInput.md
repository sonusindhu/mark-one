Basic multi-line text box

```jsx
import { MultiLineTextInput } from 'mark-one';
import { useState } from 'react';

const [value, setValue] = useState('CS50 is an on-campus and online introductory course on computer science taught at Harvard University and Yale University.');

<MultiLineTextInput
  value={value}
  id="course-notes"
  name="course-notes"
  label="Course notes"
  value={value}
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
  name="course-notes"
  label="Course notes"
  placeholder="Your text here"
  errorMessage="Please provide a value for this field"
  value={value}
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
  name="course-notes"
  label="Course notes"
  placeholder="Your text here"
  value={value}
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
  name="course-notes"
  label="Course notes"
  placeholder="Your text here"
  value={value}
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
  name="course-notes"
  label="Course notes"
  placeholder="Your text here"
  value={value}
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
    name="course-notes"
    label="Course Notes"
    placeholder="Your text here"
    value={value}
    onChange={(event) => {
      setValue(event.target.value);
    }}
    forwardRef={ref}
  />
</>
```



Multi-line text box with a `placeholder` set
```jsx
import { MultiLineTextInput, Button, VARIANT } from 'mark-one';
import { useState, useRef } from 'react';

const [value, setValue] = useState('');
<MultiLineTextInput
  id="text input"
  name="course-notes"
  label="Course Notes"
  placeholder="Your text here"
  value={value}
  onChange={(event) => {
    setValue(event.target.value);
  }}
/>
```
