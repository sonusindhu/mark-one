The following is an example of a borderless button in which the `variant` property defaults to the enum value `VARIANT.BASE`.
```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button in which variant equals VARIANT.BASE')
    }}
    variant={VARIANT.BASE}
  >
    <FontAwesomeIcon icon={faArrowUp} size="small" />
  </BorderlessButton>
</div>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.
```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button in which variant equals VARIANT.PRIMARY')
    }}
    variant={VARIANT.PRIMARY}
  >
    <FontAwesomeIcon icon={faEnvelope} size="small" />
  </BorderlessButton>
</div>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.SECONDARY`.
```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button in which variant equals VARIANT.SECONDARY')
    }}
    variant={VARIANT.SECONDARY}
  >
    <FontAwesomeIcon icon={faTimes} size="small" />
  </BorderlessButton>
</div>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.INFO`.
```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button in which variant equals VARIANT.INFO')
    }}
    variant={VARIANT.INFO}
  >
    <FontAwesomeIcon icon={faQuestion} size="small" />
  </BorderlessButton>
</div>
```

The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.DANGER`.
```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button in which variant equals VARIANT.DANGER')
    }}
    variant={VARIANT.DANGER}
  >
    <FontAwesomeIcon icon={faTrash} size="small" />
  </BorderlessButton>
</div>
```