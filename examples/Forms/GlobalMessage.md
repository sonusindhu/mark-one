The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE`.
```jsx
import { VARIANT } from 'mark-one';

<GlobalMessage
  variant={VARIANT.NEGATIVE}
  onClick={function() {
    alert('You clicked the "Close" button.')
  }}
  alt='Close Button'
  label='Close'
>
  Error: Please try again.
</GlobalMessage>
```

The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.PRIMARY`.
```jsx
import { VARIANT } from 'mark-one';

<GlobalMessage
  variant={VARIANT.PRIMARY}
  onClick={function() {
    alert('You clicked the "Close" button.')
  }}
  alt='Close Button'
  label='Close'
>
  Success: The information has been updated.
</GlobalMessage>
```

The following is an example of a global message in which the `variant` property is assigned the enum value `VARIANT.INFO`.
```jsx
import { VARIANT } from 'mark-one';

<GlobalMessage
  variant={VARIANT.INFO}
  onClick={function() {
    alert('You clicked the "Close" button.')
  }}
  alt='Close Button'
  label='Close'
>
  Info: Maintenance is scheduled to occur this evening at 7:00PM EST.
</GlobalMessage>
```