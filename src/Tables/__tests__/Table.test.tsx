import React from 'react';
import { render } from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import TableCell, { ALIGN } from '../TableCell';
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
            <TableCell backgroundColor="rgb(135, 255, 0)">1</TableCell>
            <TableCell>Lucy</TableCell>
            <TableCell>Bernstein</TableCell>
          </TableRow>
          <TableRow>
            <TableCell alignment={ALIGN.LEFT}>2</TableCell>
            <TableCell alignment={ALIGN.LEFT}>Jess</TableCell>
            <TableCell alignment={ALIGN.LEFT}>Win</TableCell>
          </TableRow>
          <TableRow isStriped>
            <TableCell alignment={ALIGN.CENTER}>3</TableCell>
            <TableCell alignment={ALIGN.CENTER}>Sam</TableCell>
            <TableCell alignment={ALIGN.CENTER}>Anderson</TableCell>
          </TableRow>
          <TableRow>
            <TableCell alignment={ALIGN.RIGHT}>4</TableCell>
            <TableCell alignment={ALIGN.RIGHT}>Judy</TableCell>
            <TableCell alignment={ALIGN.RIGHT}>Monson</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ));
  });
  describe('Table Cell', function () {
    it('contains text', function () {
      getByText('1');
    });
    it('defaults to left text-align when alignment prop is unspecified', function () {
      const style = window.getComputedStyle(getByText('1'));
      strictEqual(style.textAlign, 'left');
    });
    it('has a value of left for text-align when alignment prop is ALIGN.LEFT', function () {
      const style = window.getComputedStyle(getByText('2'));
      strictEqual(style.textAlign, 'left');
    });
    it('has a value of center for text-align when alignment prop is ALIGN.CENTER', function () {
      const style = window.getComputedStyle(getByText('3'));
      strictEqual(style.textAlign, 'center');
    });
    it('has a value of right for text-align when alignment prop is ALIGN.RIGHT', function () {
      const style = window.getComputedStyle(getByText('4'));
      strictEqual(style.textAlign, 'right');
    });
    it('renders the correct background color', function () {
      const style = window.getComputedStyle(getByText('1'));
      strictEqual(style.backgroundColor, 'rgb(135, 255, 0)');
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
    it('sets CSS overflow to scroll when isScrollable prop is true', function () {
      const body = getByTestId('tableBody');
      const style = window.getComputedStyle(body);
      strictEqual(style.overflow, 'scroll');
    });
    it('sets CSS overflow to visible when isScrollable prop is false', function () {
      render(
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadingCell scope="col">First</TableHeadingCell>
            </TableRow>
          </TableHead>
          <TableBody isScrollable={false} data-testid="tbody">
            <TableRow>
              <TableCell alignment={ALIGN.RIGHT}>1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell alignment={ALIGN.RIGHT}>3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const style = window.getComputedStyle(getByTestId('tbody'));
      strictEqual(style.overflow, 'visible');
    });
    it('sets CSS overflow to visible when isScrollable prop is not specified', function () {
      render(
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadingCell scope="col">Second</TableHeadingCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="tbody">
            <TableRow>
              <TableCell alignment={ALIGN.LEFT}>2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell alignment={ALIGN.LEFT}>4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
      const style = window.getComputedStyle(getByTestId('tbody'));
      strictEqual(style.overflow, 'visible');
    });
  });
});
