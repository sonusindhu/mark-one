The following is an example of a borderless button in which the `variant` property defaults to the enum value `VARIANT.BASE`.

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

<BorderlessButton
  onClick={function() {
    alert('You clicked the borderless button in which variant equals VARIANT.BASE')
  }}
  variant={VARIANT.BASE}
>
  <FontAwesomeIcon icon={faArrowUp} size="lg" />
</BorderlessButton>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

<BorderlessButton
  onClick={function() {
    alert('You clicked the borderless button in which variant equals VARIANT.PRIMARY')
  }}
  variant={VARIANT.PRIMARY}
>
  <FontAwesomeIcon icon={faEnvelope} size="lg" />
</BorderlessButton>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.SECONDARY`.

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

<BorderlessButton
  onClick={function() {
    alert('You clicked the borderless button in which variant equals VARIANT.SECONDARY')
  }}
  variant={VARIANT.SECONDARY}
>
  <FontAwesomeIcon icon={faTimes} size="lg" />
</BorderlessButton>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.INFO`.

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

<BorderlessButton
  onClick={function() {
    alert('You clicked the borderless button in which variant equals VARIANT.INFO')
  }}
  variant={VARIANT.INFO}
>
  <FontAwesomeIcon icon={faQuestion} size="lg" />
</BorderlessButton>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.DANGER`.

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

<BorderlessButton
  onClick={function() {
    alert('You clicked the borderless button in which variant equals VARIANT.DANGER')
  }}
  variant={VARIANT.DANGER}
>
  <FontAwesomeIcon icon={faTrash} size="lg" />
</BorderlessButton>
```

### With the `disabled` prop

This shows the full set of buttons in "active" mode alongside the buttons in "disabled" mode:

```jsx
import { VARIANT } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TwoUpBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em;
  border-bottom: ${({theme}) => (theme.border.hairline)}
`;

<>
  {Object.keys(VARIANT).map((variantName) => (
    <TwoUpBox key={variantName}>
      <BorderlessButton
        variant={VARIANT[variantName]}
        onClick={() => {}}
        title={`Active ${variantName}`}
      >
        <FontAwesomeIcon icon={faCheck} size="lg" />
      </BorderlessButton>
      <strong>{variantName}</strong>
      <BorderlessButton
        variant={VARIANT[variantName]}
        onClick={() => {}}
        disabled
        title={`Disabled ${variantName}`}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </BorderlessButton>
    </TwoUpBox>
  ))}
</>

```

### With the `forwardRef`
Ref example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.
```jsx
import {
  useState,
  useRef,
} from 'react';
import {
  Button,
  VARIANT,
  } from 'mark-one';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BorderlessButtonRefExample = () => {
  const ref = useRef(null);
  const [value, setValue] = useState('');
  const onButtonClick = () => {
    ref.current.focus();
  }
  return (
    <>
    <Button
      onClick={onButtonClick}
      variant={VARIANT.PRIMARY}
    >
      Focus the Borderless Button
    </Button>
    <BorderlessButton
      onClick={function() {
        alert('You clicked the borderless button in which variant equals VARIANT.DANGER')
      }}
      variant={VARIANT.DANGER}
      forwardRef={ref}
      alt="testing delete"
    >
      <FontAwesomeIcon icon={faTrash} size="lg" />
    </BorderlessButton>
    </>
  );
};
<BorderlessButtonRefExample />
```
