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

### Customizing the filter function

By default, the Combobox will perform a case-insensitive match of the user's input against the beginning of the `"label"` value for each option in the list. This can be customized with the `filterFunction` prop, which accepts a function that takes an option object and search string, and returns true if that option should be shown in the dropdown menu.

Note that this function will only affect the options _shown in the menu_, it has no direct impact on the value _selected by the user_.

```tsx
import { useState } from 'react';
import { POSITION } from 'mark-one';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Granny Smith Apples',
    value: 'g',
  },
  {
    label: 'Honeycrisp Apples',
    value: 'h',
  },
  {
    label: 'Macoun Apples',
    value: 'm',
  },
  {
    label: 'Red Delicious Apples',
    value: 'r',
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
  },
];

const [valueFive, setValueFive] = useState(null);
const [valueSix, setValueSix] = useState(null);

<div>
  <div>
    <Combobox
      options={options}
      label="Food (Default Search)"
      currentValue={valueFive}
      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}
    />

    <p>
      You chose: <strong>{valueFive ? valueFive.label : ''}</strong>
    </p>
  </div>
  <div>
    <Combobox
      options={options}
      label="Food (Custom Regex Search)"
      currentValue={valueSix}
      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}
      filterFunction={(option, inputValue) => {
        const re = new RegExp(inputValue, 'i');
        return re.test(option.label);
      }}
    />

    <p>
      You chose: <strong>{valueSix ? valueSix.label : ''}</strong>
    </p>
  </div>
</div>
```
