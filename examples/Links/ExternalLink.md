This component is a styled version of a regular `<a>` link, for use when we need to link to external resources.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

<ExternalLink href="https://key.harvard.edu/logout">
  Log Out
  {' '}
  <FontAwesomeIcon icon={faSignOutAlt} />
</ExternalLink>
```
