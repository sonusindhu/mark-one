Label Position example: The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="Undergraduate"
      onChange={(event) => {
        setValue(!value);
      }}
    />);
  }
  <CheckboxExample />
```

Label Position example: The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="Undergraduate"
      labelPosition="left"
      onChange={(event) => {
        setValue(!value);
      }}
    />);
  }
  <CheckboxExample />
```

Label Position example: The optional `labelPosition` prop is set to `POSITION.TOP.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="Undergraduate"
      labelPosition="top"
      onChange={(event) => {
        setValue(!value);
      }}
    />);
  }
  <CheckboxExample />
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="I agree to the terms and conditions."
      onChange={(event) => {
        setValue(!value);
      }}
      errorMessage="Please select this checkbox before proceeding."
      isRequired
    />);
  }
  <CheckboxExample />
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="I agree to the terms and conditions."
      labelPosition="left"
      onChange={(event) => {
        setValue(!value);
      }}
      errorMessage="Please select this checkbox before proceeding."
      isRequired
    />);
  }
  <CheckboxExample />
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.TOP.`
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    const [value, setValue] = useState(false);
    return (<Checkbox
      checked={value}
      label="I agree to the terms and conditions."
      labelPosition="top"
      onChange={(event) => {
        setValue(!value);
      }}
      errorMessage="Please select this checkbox before proceeding."
      isRequired
    />);
  }
  <CheckboxExample />
```


Disabled example: The optional `disabled` prop is set to true.
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    return (<Checkbox
      label="Undergraduate"
      disabled
    />);
  }
  <CheckboxExample />
```

Disabled and Checked example: The optional `disabled` and `checked` props are set to true.
```jsx
  import { useState } from 'react';
  const CheckboxExample = () => {
    return (<Checkbox
      label="Undergraduate"
      disabled
      checked
    />);
  }
  <CheckboxExample />
```

