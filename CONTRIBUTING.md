# Adding Components to the Library

## Code Style

Each file should contain only one component, and that component should be the default export of the file.

Components should be re-exported from the `index.ts` file in its directory.

Prefer functional components wherever possible, using [hooks](https://reactjs.org/docs/hooks-reference.html) to manage state if necessary.

All components should conform to eslint rules defined in `.eslintrc.json`. Check code with `npm run lint`.

## Styled Components

We're using [`styled-components`](https://www.styled-components.com/) to apply css styles to components.

Values for colors, spacing, text sizes/styles, etc. should be defined as part of [the global theme](https://www.styled-components.com/docs/advanced#theming) in `src/Theme/BaseTheme.ts`

## Typescript

All components in the library should be written in Typescript with the `.tsx` extension.

Props for each component should be defined in an interface, which should be a named export alongside the component.

You can check your typing by running `npm run typecheck`

## Testing

We're using [`mocha`](https://mochajs.org/) and [`testing-library/react`](https://testing-library.com/docs/react-testing-library/intro) to test components. 

- `npm run test` will run the test suite once and print a coverage report.
- `npm run test:watch` will watch the src directory and re-run tests on changes, without a coverage report.

Component tests should ensure that any conditional rendering logic works as expected, and that handlers/behaviors run in the expected situations.

Tests should be written in a file called `__tests__/Component.test.ts` alongside the component.

## Documentation

[React Styleguidist](https://react-styleguidist.js.org) is used to create documentation.

- `npm run start` will bring up a hot-reloading dev server during development.

- `npm run build` will generate static html documentation.

In your component file, you can add additional context to your props interface by adding `/** jsdoc-style comments */` above the fields.

Additional details about the component should be added above the component definition in a docblock. For example:

```jsx
// src/demo/Test.tsx

import React, {ReactChildren} from 'react';

export interface ITestProps {
  /** Text to display in the div */
  children: ReactChildren;
  /** background color of the div */
  color: string;
}
  
/**
 * Test div
 **/

const Test = (props: ITestProps) => (
  <div style={{background: props.color}}>
    {props.children}
  </div>
)

export default Test;
```

## Component Examples

Styleguidist will also render usage examples for components, which can be helpful during development. 

You'll need to create an example file under the top-level `examples` directory for each component under `src`. This file should replicate the sub-directory structure of the `src` directory, with a `.md` extension. (e.g. `src/buttons/TestButton.tsx` would have an example file of `src/buttons/TestButton.md`)

The example file can use any valid markdown, and fenced code blocks with a `jsx` type will render as a modifiable component in the documentation.


```` markdown
// examples/demo/Test.md

Renders the children in a div, with an optional background color

``` jsx
<Test color="#abcabc">Testing Color #abcabc</Test>
```

Testing another color

``` jsx
<Test color="#fafafa">Testing color #fafafa</Test>
```
````
