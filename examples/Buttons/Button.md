The following is an example of a basic button in which the `variant` property defaults to the enum value `VARIANT.BASE`.
```jsx
import { VARIANT } from 'mark-one';

<Button
  onClick={function() {
    alert('You clicked the button')
  }}
  variant={VARIANT.BASE}
>
  Click Me!
</Button>
```

The following is an example of a primary button in which the `variant` property is set to `VARIANT.PRIMARY`.

```jsx
import { VARIANT } from 'mark-one';

<Button
  onClick={function() {
    alert('You clicked the primary button')
  }}
  variant={VARIANT.PRIMARY}
>
  Click Me!
</Button>
```

The following is an example of a secondary button in which the `variant` property is set to `VARIANT.SECONDARY`.

```jsx
import { VARIANT } from 'mark-one';

<Button
  onClick={function() {
    alert('You clicked the secondary button')
  }}
  variant={VARIANT.SECONDARY}
>
  Click Me!
</Button>
```

The following is an example of an info button in which the `variant` property is set to `VARIANT.INFO`.

```jsx
import { VARIANT } from 'mark-one';

<Button
  onClick={function() {
    alert('You clicked the info button')
  }}
  variant={VARIANT.INFO}
>
  Click Me!
</Button>
```

The following is an example of a danger button in which the `variant` property is set to `VARIANT.DANGER`.

```jsx
import { VARIANT } from 'mark-one';

<Button
  onClick={function() {
    alert('You clicked the danger button')
  }}
  variant={VARIANT.DANGER}
>
  Click Me!
</Button>
```


The following is an example of a `form` prop for `button`

```jsx
import { useState } from 'react';
import { Button, TextInput, VARIANT } from 'mark-one';

const SimpleForm = () => {
  
  const [state, setState] = useState({ name: '' });
  
  const handleChange = ({ target }) => {
    setState({ name: target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Your name is: ' + state.name);
  };
  
  return(
    <div>
      <form id="simpleForm">
        <TextInput
           id="name"
           name="name"
           label="Name:"
           onChange={handleChange}
           value={state.name}
         />
      </form>

      <Button 
        variant={VARIANT.DEFAULT} 
        onClick={handleSubmit}
        form="simpleForm">Submit</Button>

    </div>
  );
}

<SimpleForm />
```

### With the `forwardRef`
Ref example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.
```jsx
import {
  useState,
  useRef,
} from 'react';
import { VARIANT } from 'mark-one';

const ButtonRefExample = () => {
  const ref = useRef(null);
  const onButtonClick = () => {
    ref.current.focus();
  }
  return (
    <>
    <div>
    <Button
      onClick={onButtonClick}
      variant={VARIANT.PRIMARY}
    >
      Focus the Other Button
    </Button>
    </div>
    <div>
    <Button
      onClick={function() {
        alert('You clicked the button in which variant equals VARIANT.DANGER')
      }}
      variant={VARIANT.DANGER}
      forwardRef={ref}
    >
      Other Button
    </Button>
    </div>
    </>
  );
};
<ButtonRefExample />
```
