import React from 'react';
import { PageBody } from 'mark-one';
import { render } from '@testing-library/react';
import { strictEqual } from 'assert';

describe('Page body', function () {
  it('does not require any content to be provided', function () {
    const body = render(<PageBody />).getByRole('main');
    strictEqual(body.textContent, '');
  });

  it('renders any content provided', function () {
    const { childElementCount, firstChild } = render(
      <PageBody>
        <p>
          Hello World
        </p>
      </PageBody>
    ).getByRole('main');

    strictEqual(childElementCount, 1);
    strictEqual(firstChild.nodeName, 'P');
  });
});
