The `Fieldset` component should be used in conjunction with the `Checkbox` component for accessibility. The following `Checkbox` examples include non visible `Fieldset` components.

Label Position example: The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [value, setValue] = useState(false);

<>
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
</>
```

Label Position example: The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
import { useState } from 'react';
import { Fieldset, POSITION } from 'mark-one';

const [value, setValue] = useState(false);

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <Checkbox
    checked={value}
    label="Undergraduate"
    labelPosition={POSITION.LEFT}
    onChange={(event) => {
      setValue(!value);
    }}
    />
  </Fieldset>
</>
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop defaults to `POSITION.RIGHT.`
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

const [value, setValue] = useState(false);

<>
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
</>
```

Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.LEFT.`
```jsx
import { useState } from 'react';
import { Fieldset, POSITION } from 'mark-one';

const [value, setValue] = useState(false);

<>
  <Fieldset
    legend="Fieldset Legend"
    isBorderVisible={false}
    isLegendVisible={false}
  >
    <Checkbox
    checked={value}
    label="I agree to the terms and conditions."
    labelPosition={POSITION.LEFT}
    onChange={(event) => {
      setValue(!value);
    }}
    errorMessage="Please select this checkbox before proceeding."
    isRequired
    />
  </Fieldset>
</>
```

Disabled example: The optional `disabled` prop is set to true.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

<>
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
</>
```

Disabled and Checked example: The optional `disabled` and `checked` props are set to true.
```jsx
import { useState } from 'react';
import { Fieldset } from 'mark-one';

<>
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
</>
```
