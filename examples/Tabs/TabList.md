The following example shows the usage of the TabList and TabListItem components with a StyledNav and StyledLink component.

The TabList component, along with the TabListItem components where the `isActive` prop is equal to false, are set up to have a background color `transparent`. Since the StyledNav has a background color of `theme.color.background.subtle` (from our MarkOneTheme), we see this background color across most of our tab list. When `isActive` is true for a TabListItem component, the background is `theme.color.background.light`.

```jsx
import { TabListItem } from 'mark-one';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: ${({ theme }) => theme.color.background.subtle};
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

<StyledNav>
  <TabList>
    <TabListItem>
      <StyledLink href="#">
        Tab 1
      </StyledLink>
    </TabListItem>
    <TabListItem isActive={true}>
      <StyledLink href="#">
        Tab 2
      </StyledLink>
    </TabListItem>
    <TabListItem>
      <StyledLink href="#">
        Tab 3
      </StyledLink>
    </TabListItem>
    <TabListItem>
      <StyledLink href="#">
        Tab 4
      </StyledLink>
    </TabListItem>
  </TabList>
</StyledNav>
```

The nav element in this example does not have a background color set, which is why the background color across the entire TabList defaults to the standard browser background color.

```jsx

import { TabListItem } from 'mark-one';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
`;

<nav>
  <TabList>
    <TabListItem>
      <StyledLink href="#">
        Tab 1
      </StyledLink>
    </TabListItem>
    <TabListItem isActive={true}>
      <StyledLink href="#">
        Tab 2
      </StyledLink>
    </TabListItem>
    <TabListItem>
      <StyledLink href="#">
        Tab 3
      </StyledLink>
    </TabListItem>
  </TabList>
</nav>
```
