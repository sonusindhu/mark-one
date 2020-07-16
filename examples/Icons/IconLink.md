A specialized component for displaying icons as links.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

<IconLink
  title="Edit account information"
  alt="Edit account information"
  clickHandler={() => {alert('You clicked the icon!')}}
>
  <FontAwesomeIcon icon={faEdit} size="small" />
</IconLink>
```
