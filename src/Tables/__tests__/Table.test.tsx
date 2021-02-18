import React from 'react';
import {
  render, GetByText, BoundFunction, GetByBoundAttribute, AllByRole,
} from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import { TEXT_VARIANT } from 'Theme';
import TableCell, { ALIGN } from '../TableCell';
import TableBody from '../TableBody';
import TableHead from '../TableHead';
import TableHeadingCell from '../TableHeadingCell';
import TableRow from '../TableRow';
import Table from '../Table';
import MarkOneTheme from '../../Theme/MarkOneTheme';

describe('Table Components', function () {
  let getByText: BoundFunction<GetByText>;
  let getAllByRole: BoundFunction<AllByRole>;
  let getByTestId: BoundFunction<GetByBoundAttribute>;
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
            <TableCell
              alignment={ALIGN.LEFT}
              variant={TEXT_VARIANT.MEDIUM}
            >
              2
            </TableCell>
            <TableCell
              alignment={ALIGN.LEFT}
              variant={TEXT_VARIANT.NEGATIVE}
            >
              Jess
            </TableCell>
            <TableCell
              alignment={ALIGN.LEFT}
              variant={TEXT_VARIANT.NEGATIVE}
            >
              Win
            </TableCell>
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
    context('when variant prop value is not specified', function () {
      it('renders the cell content with the base text font color', function () {
        const style = window.getComputedStyle(getByText('3'));
        const [red, green, blue] = convert.hex.rgb(
          MarkOneTheme.color.text.base
        );
        const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
        strictEqual(style.color, convertExpectedToRGB);
      });
      it('renders the cell content with the base text font weight', function () {
        const style = window.getComputedStyle(getByText('3'));
        strictEqual(style.fontWeight, MarkOneTheme.font.base.weight);
      });
    });
    context('when variant prop value is VARIANT.NEGATIVE', function () {
      it('renders the cell content with the negative text font color', function () {
        const style = window.getComputedStyle(getByText('Jess'));
        const [red, green, blue] = convert.hex.rgb(
          MarkOneTheme.color.text.negative
        );
        const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
        strictEqual(style.color, convertExpectedToRGB);
      });
      it('renders the cell content with the bold font weight', function () {
        const style = window.getComputedStyle(getByText('Jess'));
        strictEqual(style.fontWeight, MarkOneTheme.font.bold.weight);
      });
    });
    context('when variant prop value is VARIANT.MEDIUM', function () {
      it('renders the cell content with the medium text font color', function () {
        const style = window.getComputedStyle(getByText('2'));
        const [red, green, blue] = convert.hex.rgb(
          MarkOneTheme.color.text.medium
        );
        const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
        strictEqual(style.color, convertExpectedToRGB);
      });
      it('renders the cell content with the bold font weight', function () {
        const style = window.getComputedStyle(getByText('2'));
        strictEqual(style.fontWeight, MarkOneTheme.font.bold.weight);
      });
    });
  });
  describe('Table Heading Cell', function () {
    beforeEach(function () {
      ({ getByText } = render(
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadingCell backgroundColor="rgb(123, 123, 123)">With Background</TableHeadingCell>
              <TableHeadingCell>Without Background</TableHeadingCell>
            </TableRow>
          </TableHead>
        </Table>
      ));
    });
    it('Renders with the passed background color', function () {
      const style = window.getComputedStyle(getByText('With Background'));
      strictEqual(style.backgroundColor, 'rgb(123, 123, 123)');
    });
    it('defaults to medium with no background color', function () {
      const style = window.getComputedStyle(getByText('Without Background'));
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.medium
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
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
        MarkOneTheme.color.background.subtle
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
    describe('noHighlight prop', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadingCell>Regular</TableHeadingCell>
              </TableRow>
              <TableRow noHighlight>
                <TableHeadingCell>noHighlight</TableHeadingCell>
              </TableRow>
            </TableHead>
          </Table>
        ));
      });
      it('Should not have a :hover css class with noHighlight', function () {
        const noHighlight = getByText('noHighlight');
        const allSheets = Array.from(document.styleSheets);
        const sheet = allSheets[allSheets.length - 1];
        const rules = sheet.cssRules;
        const parentClasses = noHighlight.parentElement.classList;
        const maybeHoverClasses = Array.from(parentClasses)
          .map((className) => `.${className}:hover`);
        const hoverRule = Array.from(rules)
          .find(({ selectorText }: CSSStyleRule) => (
            maybeHoverClasses.includes(selectorText)
          ));
        strictEqual(hoverRule, undefined);
      });
      it('Should have a :hover rule without noHighlight', function () {
        const regular = getByText('Regular');
        const allSheets = Array.from(document.styleSheets);
        const sheet = allSheets[allSheets.length - 1];
        const rules = sheet.cssRules;
        const parentClasses = regular.parentElement.classList;
        const maybeHoverClasses = Array.from(parentClasses)
          .map((className) => `.${className}:hover`);
        const hoverRule = Array.from(rules)
          .find(({ selectorText }: CSSStyleRule) => (
            maybeHoverClasses.includes(selectorText)
          ));
        strictEqual(
          hoverRule
            .cssText
            .includes(`background: ${MarkOneTheme.color.background.medium}`),
          true
        );
      });
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
