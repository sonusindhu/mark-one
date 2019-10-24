## Mark One Theme Specimens

### Background Colors

```jsx
import styled from 'styled-components';
const BackgroundDiv = styled.div`
  background: ${({theme, value}) => theme.color.background[value]};
  padding: ${({theme}) => (theme.ws.medium)};
`;
<div>
  {[
     'light',
     'subtle',
     'medium',
     'dark',
     'darker',
     'accent',
  ].map((color) => (
    <BackgroundDiv value={color}>Background: {color}</BackgroundDiv>
  ))}
</div>
```

### Typography


### Miscellaneous
