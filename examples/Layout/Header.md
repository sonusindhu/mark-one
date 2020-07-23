The Header uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:

```jsx
import logo from './H_SEAS_logo_RGB.svg';
import { Logo, PageTitle } from 'mark-one';

<Header>
  <Logo
    image={logo}
    width="175px"
    href="#"
  >
    The Link Description
  </Logo>
  <PageTitle>Application Title</PageTitle>
  <div>three</div>
  <div>menu</div>
  <div>items</div>
</Header>
```

A value of `center` be used to position content around the center. (See [MDN's docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).

```jsx
import { PageTitle } from 'mark-one';

<Header justify="center">
  <PageTitle>Centered Title</PageTitle>
</Header>
```

You can also pass in a custom `background` prop to replace the default transparent background

```jsx
import { PageTitle } from 'mark-one';

<Header justify="center" background="#eafeaf">
  <PageTitle>Custom Background</PageTitle>
</Header>
```
