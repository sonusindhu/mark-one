# Mark One

[![Travis](https://img.shields.io/travis/com/seas-computing/mark-one.svg)](https://travis-ci.com/seas-computing/mark-one)
[![Codecov](https://img.shields.io/codecov/c/gh/seas-computing/mark-one.svg)](https://codecov.io/gh/seas-computing/mark-one)
[![Styleguidist](https://img.shields.io/badge/docs-Styleguidist-red.svg)](https://seas-computing.github.io/mark-one/)
![GitHub top language](https://img.shields.io/github/languages/top/seas-computing/mark-one.svg)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)
![BSD License](https://img.shields.io/github/license/seas-computing/mark-one)

A React UI library in development at the Harvard John A. Paulson School of Engineering and Applied Sciences.

## Installing

> This project is currently under development, and all components are liable to change significantly between version. You should not use this in a production app unless you know what you're doing.

Mark One can be installed from NPM:

``` bash
npm install mark-one
```

Components can be imported and used individually in projects.

``` tsx static
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

### Indicators

Elements to indicate whether an asynchronous process is in progress, such as a data upload or fetch from the server.

### Layout

High-level page structure components, including headers, modals, etc.

## Adding Components

Guidelines for adding components are defined in [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Documentation

We're using [React Styleguidist](https://react-styleguidist.js.org/) to generate our documentation.

