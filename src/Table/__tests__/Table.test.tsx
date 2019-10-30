import React from 'react';
import { render } from 'test-utils';
import TableCell from '../TableCell';
import Table from '../Table';

describe('Table Components', function () {
  let getByText;
  beforeEach(function () {
    ({ getByText } = render(
      <Table>
        <tbody>
          <tr>
            <TableCell>Hello World</TableCell>
          </tr>
        </tbody>
      </Table>
    ));
  });
  // look at React Testing docs to see if there's a way to test that below is a td
  describe('Table Cell', function () {
    it('contains text', function () {
      getByText('Hello World');
    });
  });
});
