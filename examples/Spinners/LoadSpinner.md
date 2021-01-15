A load spinner component that can be used to show the loading state of the data.

```jsx
<LoadSpinner>
  Loading Data
</LoadSpinner>
```

To style the text to have a light color. Note that a dark background is used to show the light text.

```jsx
import { SPINNER_TEXT } from 'mark-one';

const DarkBackground = styled.div`
  background: ${({ theme }) => theme.color.background.darker };
`;

<DarkBackground>
  <LoadSpinner textColor={SPINNER_TEXT.LIGHT}>
    Loading Data
  </LoadSpinner>
</DarkBackground>
```

