The `CheckLabel` component is used by the `RadioButton` and `Checkbox` components, while the `InputLabel` component is used by the `TextInput` and `Dropdown` components. These label variations were created to align input fields when using various form elements in tandem.

Aligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` is `POSITION.RIGHT`, and the `labelPosition` for the `Dropdown` is `POSITION.TOP`.
```jsx
import { useState } from 'react';
import { Fieldset, RadioButton, Dropdown, POSITION } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');
const [value, setValue] = useState('fall');

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <RadioButton
      label="Foo"
      value="foo"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'foo'}
      onChange={(event) => setCheckedValue(event.target.value)}
      labelPosition={POSITION.RIGHT}
    />
    <RadioButton
      label="Bar"
      value="bar"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'bar'}
      onChange={(event) => setCheckedValue(event.target.value)}
      labelPosition={POSITION.RIGHT}
    />
    <Dropdown
      options={[
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'fall',
          label: 'Fall',
        },
        {
          value: 'spring',
          label: 'Spring',
        },
      ]}
      value={value}
      id="semesters"
      name="semesters"
      onChange={function(event){
        setValue(event.target.value);
        alert('You changed the selection to ' + event.target.value);
      }}
      label="Semester"
      labelPosition={POSITION.TOP}
    />
  </Fieldset>
</>
```

Aligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` and `Dropdown` is `POSITION.LEFT`.
```jsx
import { useState } from 'react';
import { Fieldset, RadioButton, Dropdown, POSITION } from 'mark-one';

const [checkedValue, setCheckedValue] = useState('');
const [value, setValue] = useState('fall');

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <RadioButton
      label="Foo"
      value="foo"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'foo'}
      onChange={(event) => setCheckedValue(event.target.value)}
      labelPosition={POSITION.LEFT}
    />
    <RadioButton
      label="Bar"
      value="bar"
      name="nonVisibleFieldsetTest"
      checked={checkedValue === 'bar'}
      onChange={(event) => setCheckedValue(event.target.value)}
      labelPosition={POSITION.LEFT}
    />
    <Dropdown
      options={[
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'fall',
          label: 'Fall',
        },
        {
          value: 'spring',
          label: 'Spring',
        },
      ]}
      value={value}
      id="semesters"
      name="semesters"
      onChange={function(event){
        setValue(event.target.value);
        alert('You changed the selection to ' + event.target.value);
      }}
      label="Semester"
      labelPosition={POSITION.LEFT}
    />
  </Fieldset>
</>
```