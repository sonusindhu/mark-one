Fieldset Legend and Error message example: The `legend` property is set to "Fieldset Legend," and the `errorMessage` property is set. Two of the fieldset children, required checkboxes, also have their individual error messages.
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';
const FieldsetExample = () => {
  const [requiredCheckbox, setRequiredCheckbox] = useState(false);
  const [anotherRequiredCheckbox, setAnotherRequiredCheckbox] = useState(false);
  const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);
  return (
    <Fieldset
      legend="Fieldset Legend"
      legendDescription="Note: * denoted required information"
      errorMessage="Error: Please fill in the required fields in the form."
    >
      <Checkbox
        checked={requiredCheckbox}
        label="Required Checkbox"
        onChange={(event) => {
          setRequiredCheckbox(!requiredCheckbox);
        }}
        errorMessage="Please select this checkbox before proceeding."
        isRequired
      />
      <Checkbox
        checked={anotherRequiredCheckbox}
        label="Another Required Checkbox"
        onChange={(event) => {
          setAnotherRequiredCheckbox(!anotherRequiredCheckbox);
        }}
        errorMessage="Please select this checkbox before proceeding."
        isRequired
      />
      <Checkbox
        checked={nonRequiredCheckbox}
        label="Non-Required Checkbox"
        onChange={(event) => {
          setNonRequiredCheckbox(!nonRequiredCheckbox);
      }}
      />
    </Fieldset>
  );
}
<FieldsetExample />
```

Non Visible Border example: The `isBorderVisible` property is set to `false.`
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';
const FieldsetExample = () => {
  const [requiredCheckbox, setRequiredCheckbox] = useState(false);
  const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);
  return (
    <Fieldset
      legend="Fieldset Legend"
      legendDescription="Note: * denoted required information"
      isBorderVisible={false}
    >
      <Checkbox
        checked={requiredCheckbox}
        label="Required Checkbox"
        onChange={(event) => {
          setRequiredCheckbox(!requiredCheckbox);
        }}
        isRequired
      />
      <Checkbox
        checked={nonRequiredCheckbox}
        label="Non-Required Checkbox"
        onChange={(event) => {
          setNonRequiredCheckbox(!nonRequiredCheckbox);
        }}
      />
    </Fieldset>
  );
}
<FieldsetExample />
```

Non Visible Border and Non Visible Legend example: The `isBorderVisible` property is set to `false,` and the `legend` property is set to "Fieldset Legend."
```jsx
import { useState } from 'react';
import { Checkbox } from 'mark-one';
const FieldsetExample = () => {
  const [requiredCheckbox, setRequiredCheckbox] = useState(false);
  const [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);
  return (
    <Fieldset
      legend="Fieldset Legend"
      legendDescription="Note: * denoted required information"
      isBorderVisible={false}
    >
      <Checkbox
        checked={requiredCheckbox}
        label="Required Checkbox"
        onChange={(event) => {
          setRequiredCheckbox(!requiredCheckbox);
        }}
        isRequired
      />
      <Checkbox
        checked={nonRequiredCheckbox}
        label="Non-Required Checkbox"
        onChange={(event) => {
          setNonRequiredCheckbox(!nonRequiredCheckbox);
        }}
      />
    </Fieldset>
  );
}
<FieldsetExample />
```
