import React from 'react';
import { render } from 'test-utils';
import { PageTitle } from '..';

describe('Page title', function () {
  it('renders any text provided', async function () {
    const {
      findByText,
    } = render(<PageTitle>Hello World</PageTitle>);
    return findByText('Hello World');
  });
});
