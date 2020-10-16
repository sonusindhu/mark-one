The `Fieldset` component should be used in conjunction with the `Checkbox` component for accessibility. The following `Checkbox` examples include non visible `Fieldset` components.

Label Position example: The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  const [value, setValue] = useState(false);
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      checked={value}
      label="Undergraduate"
      onChange={(event) => {
        setValue(!value);
      }}
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```

Label Position example: The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  const [value, setValue] = useState(false);
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      checked={value}
      label="Undergraduate"
      labelPosition="left"
      onChange={(event) => {
        setValue(!value);
      }}
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  const [value, setValue] = useState(false);
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      checked={value}
      label="I agree to the terms and conditions."
      onChange={(event) => {
        setValue(!value);
      }}
      errorMessage="Please select this checkbox before proceeding."
      isRequired
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  const [value, setValue] = useState(false);
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      checked={value}
      label="I agree to the terms and conditions."
      labelPosition="left"
      onChange={(event) => {
        setValue(!value);
      }}
      errorMessage="Please select this checkbox before proceeding."
      isRequired
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```

Disabled example: The optional `disabled` prop is set to true.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      label="Undergraduate"
      disabled
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```

Disabled and Checked example: The optional `disabled` and `checked` props are set to true.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';
const CheckboxExample = () => {
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
      label="Undergraduate"
      disabled
      checked
      />
    </Fieldset>
  </>);
}
<CheckboxExample />
```
