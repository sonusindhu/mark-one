```jsx
import { VARIANT } from 'Theme/MarkOneTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
<div>
  <BorderlessButton
    onClick={function() {
      alert('You clicked the borderless button')
    }}
    variant={VARIANT.BASE}
  >
    <FontAwesomeIcon icon={faArrowUp} size="small" />
  </BorderlessButton>
</div>
```