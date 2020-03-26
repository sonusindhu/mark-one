This component is an extension of the default React Link component with custom styling. This `Link` component could be used in conjunction with our `Mark-One` `TabList` and `TabListItem` components to create a navigation bar. In order to use this component, the Link must be a child of a React Router.
```jsx
import { MemoryRouter } from 'react-router-dom';
<MemoryRouter>
  <Link to="#">Test Link</Link>
</MemoryRouter>
```