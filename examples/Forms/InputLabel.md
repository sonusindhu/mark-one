The `InputLabel` component is used by the `TextInput` and `Dropdown` components, while the `CheckLabel` component is used by the `RadioButton` and `Checkbox` components. These label variations were created to align input fields when using various form elements in tandem.

Aligning `TextInput` and `Checkbox` fields example: The labelPosition for `TextInput` is `POSITION.TOP`, and the `labelPosition` for the `Checkbox` is `POSITION.RIGHT`.
```jsx
import { useState } from 'react';
import { Fieldset, TextInput, Checkbox, POSITION } from 'mark-one';
const Example = () => {
  const [checkValue, setCheckValue] = useState(false);
  const [textValue, setTextValue] = useState('Some valid input');
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
        checked={checkValue}
        label="Undergraduate"
        labelPosition={POSITION.RIGHT}
        onChange={(event) => {
          setCheckValue(!checkValue);
        }}
      />
      <TextInput
        name="example"
        id="example"
        value={textValue}
        label="Description"
        labelPosition={POSITION.TOP}
        onChange={(event) => {
        setTextValue(event.target.value);
        }}
      />
    </Fieldset>
  </>);
}
<Example />
```

Aligning `TextInput` and `Checkbox` fields example: The `labelPosition` for the `TextInput` and `Checkbox` is `POSITION.LEFT.`
```jsx
import { useState } from 'react';
import { Fieldset, TextInput, Checkbox, POSITION } from 'mark-one';
const Example = () => {
  const [checkValue, setCheckValue] = useState(false);
  const [textValue, setTextValue] = useState('Some valid input');
  return (<>
    <Fieldset
      legend="Fieldset Legend"
      isBorderVisible={false}
      isLegendVisible={false}
    >
      <Checkbox
        checked={checkValue}
        label="Undergraduate"
        labelPosition={POSITION.LEFT}
        onChange={(event) => {
          setCheckValue(!checkValue);
        }}
      />
      <TextInput
        name="example"
        id="example"
        value={textValue}
        label="Description"
        labelPosition={POSITION.LEFT}
        onChange={(event) => {
        setTextValue(event.target.value);
        }}
      />
    </Fieldset>
  </>);
}
<Example />
```
