import {
  BoundFunction,
  GetByText,
  QueryByText,
  render,
} from 'test-utils';
import React from 'react';
import {
  Fieldset,
  Checkbox,
} from 'Forms';
import {
  strictEqual,
  notStrictEqual,
} from 'assert';

describe('Fieldset', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  describe('errorMessage prop', function () {
    const errorMessage = 'Error: Please fill in the required fields in the form.';
    context('when errorMessage value is present', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend="Fieldset Legend"
            legendDescription="Note: * denoted required information"
            errorMessage={errorMessage}
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('renders the error message', function () {
        getByText(errorMessage, { exact: false });
      });
    });
    context('when errorMessage prop is not present', function () {
      beforeEach(function () {
        ({ queryByText } = render(
          <Fieldset
            legend="Fieldset Legend"
            legendDescription="Note: * denoted required information"
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('does not render the error message', function () {
        strictEqual(queryByText(errorMessage, { exact: false }), null);
      });
    });
  });
  describe('isBorderVisible prop', function () {
    const legendText = 'Fieldset Legend';
    context('when isBorderVisible is true', function () {
      beforeEach(function () {
        render(
          <Fieldset
            legend={legendText}
            legendDescription="Note: * denoted required information"
            isBorderVisible
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        );
      });
      it('renders the border', function () {
        const fieldset = getByText(legendText).parentNode as HTMLElement;
        const style = window.getComputedStyle(fieldset);
        notStrictEqual(style.border, '' || 'none' || 0);
      });
      it('sets the padding-inline-start accordingly', function () {
        const fieldset = getByText(legendText).parentNode as HTMLElement;
        const style = window.getComputedStyle(fieldset);
        strictEqual(style.paddingInlineStart, '0.75em');
      });
    });
    context('when isBorderVisible is false', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend={legendText}
            isBorderVisible={false}
            isLegendVisible
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('does not render the border', function () {
        const fieldset = document.querySelector('fieldset');
        const style = window.getComputedStyle(fieldset);
        strictEqual(style.border, '');
      });
      context('when isLegendVisible is true', function () {
        it('sets the padding-inline-start accordingly', function () {
          const fieldset = getByText(legendText).parentNode as HTMLElement;
          const style = window.getComputedStyle(fieldset);
          strictEqual(style.paddingInlineStart, '');
        });
      });
    });
    context('when both isBorderVisible and isLegendVisible are false', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend={legendText}
            legendDescription="Note: * denoted required information"
            isBorderVisible={false}
            isLegendVisible={false}
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('sets the padding-inline-start accordingly', function () {
        const fieldset = getByText(legendText).parentNode as HTMLElement;
        const style = window.getComputedStyle(fieldset);
        strictEqual(style.paddingInlineStart, '');
      });
    });
  });
  describe('isLegendVisible prop', function () {
    const legendText = 'Fieldset Legend';
    context('when isLegendVisible is true', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend={legendText}
            legendDescription="Note: * denoted required information"
            isLegendVisible
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('renders the legend', function () {
        getByText(legendText);
      });
      it('sets the padding-inline-start accordingly', function () {
        const fieldset = getByText(legendText).parentNode as HTMLElement;
        const style = window.getComputedStyle(fieldset);
        strictEqual(style.paddingInlineStart, '0.75em');
      });
    });
    context('when isLegendVisible prop is false', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend={legendText}
            legendDescription="Note: * denoted required information"
            isLegendVisible={false}
            isBorderVisible
          >
            <Checkbox
              checked
              label="Non-Required Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('renders the legend', function () {
        getByText(legendText);
      });
      it('positions the legend off screen', function () {
        const legend = document.querySelector('legend');
        const style = window.getComputedStyle(legend);
        strictEqual(style.left, '-100vw');
        strictEqual(style.position, 'absolute');
      });
      context('when isBorderVisible is true', function () {
        it('sets the padding-inline-start accordingly', function () {
          const fieldset = getByText(legendText).parentNode as HTMLElement;
          const style = window.getComputedStyle(fieldset);
          strictEqual(style.paddingInlineStart, '0.75em');
        });
      });
    });
  });
  describe('isRequired prop', function () {
    const legendText = 'Legend Fieldset';
    context('when isRequired is true', function () {
      beforeEach(function () {
        ({ getByText } = render(
          <Fieldset
            legend={legendText}
            isLegendVisible
            isRequired
          >
            <Checkbox
              checked
              label="Disabled Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('renders an asterisk, denoting that there is a required field(s)', function () {
        getByText('*');
      });
    });
    context('when isRequired is false', function () {
      beforeEach(function () {
        ({ queryByText } = render(
          <Fieldset
            legend={legendText}
            isLegendVisible
          >
            <Checkbox
              checked
              label="Disabled Checkbox"
              disabled
            />
          </Fieldset>
        ));
      });
      it('does not render an asterisk, denoting that there is a required field(s)', function () {
        strictEqual(queryByText('*', { exact: false }), null);
      });
    });
  });
});
