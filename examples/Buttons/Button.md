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
