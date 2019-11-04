import React from 'react';
import { render, cleanup } from 'test-utils';
import { strictEqual } from 'assert';
import TableCell from '../TableCell';
import TableBody from '../TableBody';
import TableHead from '../TableHead';
import TableHeadingCell from '../TableHeadingCell';
import TableRow from '../TableRow';
import Table from '../Table';

describe('Table Components', function () {
  let getByText;
  let getAllByRole;
  beforeEach(function () {
    ({ getByText, getAllByRole } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadingCell scope="col">ID</TableHeadingCell>
            <TableHeadingCell scope="col">First Name</TableHeadingCell>
            <TableHeadingCell scope="col">Last Name</TableHeadingCell>
          </TableRow>
        </TableHead>
        <TableBody isScrollable>
          <TableRow isStriped>
            <TableCell>1</TableCell>
            <TableCell>Lucy</TableCell>
            <TableCell>Bernstein</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Jess</TableCell>
            <TableCell>Win</TableCell>
          </TableRow>
          <TableRow isStriped>
            <TableCell>3</TableCell>
            <TableCell>Sam</TableCell>
            <TableCell>Anderson</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Judy</TableCell>
            <TableCell>Monson</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ));
  });
  afterEach(function () {
    cleanup();
  });
  describe('Table Cell', function () {
    it('contains text', function () {
      getByText('1');
    });
  });
  describe('Table Heading Cell', function () {
    it('contains text', function () {
      getByText('ID');
    });
  });
  describe('Table Row', function () {
    it('renders every table cell', function () {
      const cellCount = getAllByRole('cell').length;
      strictEqual(cellCount, 12);
    });
  });
});
