import React from 'react';
import { render } from 'test-utils';
import { HeadingOne } from '..';

describe('Level 1 heading', function () {
  it('renders any text provided', function () {
    const {
      findByText,
    } = render(<HeadingOne>Hello World</HeadingOne>);

    findByText('Hello World');
  });
});
