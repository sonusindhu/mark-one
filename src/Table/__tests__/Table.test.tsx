import React from 'react';
import { render, cleanup } from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import TableCell from '../TableCell';
import TableBody from '../TableBody';
import TableHead from '../TableHead';
import TableHeadingCell from '../TableHeadingCell';
import TableRow from '../TableRow';
import Table from '../Table';
import MarkOneTheme from '../../Theme/MarkOneTheme';

describe('Table Components', function () {
  let getByText;
  let getAllByRole;
  let getByTestId;
  beforeEach(function () {
    ({ getByText, getAllByRole, getByTestId } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadingCell scope="col">ID</TableHeadingCell>
            <TableHeadingCell scope="col">First Name</TableHeadingCell>
            <TableHeadingCell scope="col">Last Name</TableHeadingCell>
          </TableRow>
        </TableHead>
        <TableBody isScrollable data-testid="tableBody">
          <TableRow isStriped data-testid="firstStripedRow">
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
    it('renders a row with a darker background color when isStriped is true', function () {
      const row = getByTestId('firstStripedRow');
      const style = window.getComputedStyle(row);
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.subtle as string
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
  });
  describe('Table Body', function () {
    it('has the appropriate CSS properties when isScrollable prop is true', function () {
      const body = getByTestId('tableBody');
      const style = window.getComputedStyle(body);
      strictEqual(style.overflow, 'scroll');
    });
  });
});
