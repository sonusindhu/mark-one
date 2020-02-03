The Header uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:

```jsx
import styled from 'styled-components';
import logo from './H_SEAS_logo_RGB.svg';
import { Logo } from 'mark-one';

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.title.size};
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight};
  grid-column-end: span 4;
`;

<Header>
  <Logo
    image={logo}
    width="175px"
    href="#"
  >
    The Link Description
  </Logo>
  <Title>Application Title</Title>
  <div>three</div>
  <div>menu</div>
  <div>items</div>
</Header>
```

A value of `center` be used to position content around the center. (See [MDN's docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).

```jsx
import styled from 'styled-components';

const Title = styled.h1`
  grid-column: 5 / 9;
  font-size: ${({ theme }) => theme.font.title.size};
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight};
  text-align: center;
`;

<Header justify="center">
  <Title>Centered Title</Title>
</Header>
```

You can also pass in a custom `background` prop to replace the default transparent background

```jsx
import styled from 'styled-components';

const Title = styled.h1`
  grid-column: 5 / 9;
  font-size: ${({ theme }) => theme.font.title.size};
  font-family: ${({ theme }) => theme.font.title.family};
  font-weight: ${({ theme }) => theme.font.title.weight};
  text-align: center;
`;

<Header justify="center" background="#eafeaf">
  <Title>Custom Background</Title>
</Header>
```
