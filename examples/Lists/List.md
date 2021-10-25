The `<List>` and `<ListItem>` components can be used to render an ordered or unordered list of elements. Both list styles are visually identical, but should be specified for proper html semantics.

The ordered version of the list: 

```tsx
import { List, ListItem } from 'mark-one';

<List ordered>
  <ListItem>One</ListItem>
  <ListItem>Two</ListItem>
  <ListItem>Three</ListItem>
</List>
```

And the unordered version of the list: 

```tsx
import { List, ListItem } from 'mark-one';

<List>
  <ListItem>Dogs</ListItem>
  <ListItem>Cats</ListItem>
  <ListItem>Fish</ListItem>
</List>
```

