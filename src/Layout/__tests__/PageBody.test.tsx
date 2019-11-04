import React from 'react';
import { PageBody } from 'mark-one';
import { render } from "@testing-library/react";
import { strictEqual } from "assert";

describe('Page body', function() {
  it('renders any content provided', function() {
    const body = render(
      <PageBody>
        <p>
          Hello World
        </p>
      </PageBody>
    ).getByRole('main');

    strictEqual(body.textContent, 'Hello World');
  });
});
