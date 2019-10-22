# Adding Components to the Library

## Style

The component should be the default export of the file.

Prefer stateless functional components wherever possible, using [hooks](https://reactjs.org/docs/hooks-reference.html) to manage state if necessary.

All components should pass eslint rules defined in .eslintrc.json. Check with `npm run lint`.

Use [`styled-components`](https://www.styled-components.com/) to apply css styles to components.

Use constants for colors, spacing, borders, etc. These can be found at `TKTKTKTKTK`

Make sure the add the component to the `index.ts` file in its directory to ensure that it is re-exported correctly.

## Typescript

All components in the library should be written in Typescript with the `.tsx` extension.

All props for each component should be defined in an interface, which should be exported alongside the component.

You can check your typing by running `npm run typecheck`

## Testing

We're using [`mocha`](https://mochajs.org/) and [`testing-library/react`](https://testing-library.com/docs/react-testing-library/intro) to test components. 

Component tests should ensure that any conditional rendering logic works as expected, and that any handlers or orther efined behaviors run when expected.

Tests should be written in a file called `__tests__/Component.test.ts` alongside the component.

## Styleguide

[React Styleguidist](https://react-styleguidist.js.org) can be used to demo and develop components.

- Use `npm run start` to bring up the hot-reloading dev server

- Use `npm run build` to generate static html documentation

In your component file, you can add additional context to your props interface by adding `/** jsdoc-style comments */` above the fields (_note the double-asterisks on the comment opening_).

Additional details about the component should be added above the component definition in a docblock.

### Example:

```jsx
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

To render your component in styleguidist, you'll need to create an accompanying example file under the top-level `examples` directory. 

This file should replicate the sub-directory structure of the `src` directory, with a `.md` extension. (e.g. `src/buttons/TestButton.tsx` would have an example file of `src/buttons/TestButton.md`)

The example file can include fenced code blocks with a `jsx` type, which will render as a modifiable component in the documentation.

### Example

```
Renders the children in a div, with an optional background color

\`\`\`jsx
<Test color="#abcabc">Testing Color #abcabc</Test>
\`\`\`

Testing another color

\`\`\`jsx
<Test color="#fafafa">Testing color #fafafa</Test>
\`\`\`
```
