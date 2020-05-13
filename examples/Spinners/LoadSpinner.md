A load spinner component that can be used to show the loading state of the data.
```jsx
<LoadSpinner>
  Loading Data
</LoadSpinner>
```

To style the text to have a dark light color.
```jsx
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BaseTheme, SPINNER_TEXT } from 'mark-one';

const theme = useContext(ThemeContext);

<div style={{background: theme.color.background.darker}}>
  <LoadSpinner textColor={SPINNER_TEXT.LIGHT}>
    Loading Data
  </LoadSpinner>
</div>
```