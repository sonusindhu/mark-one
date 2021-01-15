Used for rendering an image link with screen-reader compatible text:

```jsx
import logo from './H_SEAS_logo_RGB.svg';

<Logo image={logo} width="500px" height="150px" href="#SEAS">
  This text is not visible, but is in the DOM
</Logo>
```

By default, it will render at `175px` x `50px`:

```jsx
import logo from './H_SEAS_logo_RGB.svg';

<Logo image={logo} href="#SEAS">
  This text is not visible, but is in the DOM
</Logo>
```
