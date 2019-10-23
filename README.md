# Mark One

A React UI library in development at the Harvard John A. Paulson School of Engineering and Applied Sciences.

## Installing

> Project is unpublished, so this will not work yet

Mark One can be installed from NPM:

```
npm install mark-one
```

Components can be imported and used individually in projects.

```jsx
import { BasicButton } from 'mark-one'

export default () => (
  <BasicButton>
    Click Me!
  </BasicButton>
)
```

## Structure

All components are defined under the `./src` directory, divided into subdirectories by category. Tests live alongside the code in `__tests__` directories.

### Buttons

Defines standard `Button` along with variants for confirm/deny actions, toggled labels, Icon-only buttons, and others.

### Forms

Components for handling the layout and behavior of forms, such as field sets, collapsible panels, etc.

### Inputs

Text fields, checkboxes, radio buttons, text areas, select boxes, etc.

### ~Spinners~ Indicators

Elements to indicate whether an asynchronous process is in progress, such as a data upload or fetch from the server.

### Layout

High-level page structure components, including headers, modals, etc.

## Adding Components

Guidelines for adding components are defined in [`CONTRIBUTING.MD`](CONTRIBUTING.MD)

## Documentation

We're using [React Styleguidist](https://react-styleguidist.js.org/) to generate our documentation.

