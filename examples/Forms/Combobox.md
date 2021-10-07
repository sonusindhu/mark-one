The `Combobox` is a typeahead-style autocomplete input, where the user can choose from among a number of different options by either clicking a button to show the whole list, or by starting to type the value they want and letting the autocomplete take over. The actual value stored in state will only update with one of the defined options; it does not allow for specifying arbitrary values.

Under the hood we're using [the Downshift library][downshift], which handles the state updates and accessibility features out of the box. However, we're intending it to be used as a controlled component, so the `currentValue` needs to be managed by a parent-level state value.

[downshift]: https://www.downshift-js.com/

### The standard Combobox

```tsx
import { useState } from 'react';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  }
];

const [valueOne, setValueOne] = useState(null);

<div>
  <Combobox
    isLabelVisible={true}
    options={options}
    label="Food"
    currentValue={valueOne}
    onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}
  />
  <p>
    You chose: <strong>{valueOne ? valueOne.label : ''}</strong>
  </p>
</div>
```

### With the label above the box:

```tsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  }
];

const [valueTwo, setValueTwo] = useState(null);

<div>
  <Combobox
    labelPosition={POSITION.TOP}
    isLabelVisible={true}
    options={options}
    label="Food"
    currentValue={valueTwo}
    onOptionSelected={({ selectedItem }) => {setValueTwo(selectedItem)}}
  />

  <p>
    You chose: <strong>{valueTwo ? valueTwo.label : ''}</strong>
  </p>
</div>
```

### With the label and error hidden
```tsx
import { useState } from 'react';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  }
];

const [valueThree, setValueThree] = useState(null);

<div>
  <Combobox
    isLabelVisible={false}
    hideError={true}
    options={options}
    label="Food"
    currentValue={valueThree}
    onOptionSelected={({ selectedItem }) => {setValueThree(selectedItem)}}
  />
  <p>
    You chose: <strong>{valueThree ? valueThree.label : ''}</strong>
  </p>
</div>
```

### With an error message

```tsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  }
];

const [valueFour, setValueFour] = useState(null);

<div>
  <Combobox
    isLabelVisible={true}
    options={options}
    label="Food"
    isRequired
    errorMessage={!valueFour ? 'You must select a valid option' : null}
    currentValue={valueFour}
    onOptionSelected={({ selectedItem }) => {setValueFour(selectedItem)}}
  />

  <p>
    You chose: <strong>{valueFour ? valueFour.label : ''}</strong>
  </p>
</div>
```
