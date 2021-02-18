import {
  SinonSpy,
  spy,
} from 'sinon';
import {
  BoundFunction,
  GetByText,
  QueryByText,
  render,
} from 'test-utils';
import React, { useRef } from 'react';
import { strictEqual } from 'assert';
import RadioButton from 'Forms/RadioButton';
import userEvent from '@testing-library/user-event';
import { Button } from 'Buttons';
import { VARIANT } from 'Theme';
import { POSITION } from 'Forms/InputLabel';
import MarkOneTheme from 'Theme/MarkOneTheme';

describe('Radio Button', function () {
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  describe('disabled prop', function () {
    const radioButtonId = 'testRadio';
    context('when disabled is false', function () {
      beforeEach(function () {
        changeSpy = spy();
        render(
          <>
            <RadioButton
              id={radioButtonId}
              label="Bar"
              value="bar"
              name="test"
              onChange={changeSpy}
            />
          </>
        );
      });
      it('calls the change handler when clicked', function () {
        userEvent.click(document.getElementById(radioButtonId));
        strictEqual(changeSpy.callCount, 1);
      });
    });
    context('when disabled is true', function () {
      beforeEach(function () {
        changeSpy = spy();
        render(
          <>
            <RadioButton
              id={radioButtonId}
              label="One"
              value="one"
              name="disabledPropTest"
              disabled
              checked
              onChange={changeSpy}
            />
          </>
        );
      });
      it('does not call the change handler when clicked', function () {
        userEvent.click(document.getElementById(radioButtonId));
        strictEqual(changeSpy.callCount, 0);
      });
      it('styles its select mark border accordingly', function () {
        const radioButton = document
          .getElementById(radioButtonId) as HTMLInputElement;
        const label = radioButton.parentNode as HTMLLabelElement;
        const selectMark = label.querySelector('span span span');
        const borderStyle = window.getComputedStyle(selectMark).border;
        strictEqual(borderStyle, `6px solid ${MarkOneTheme.color.text.medium}`);
      });
    });
  });
  describe('checked prop', function () {
    const radioButtonId = 'testRadio';
    context('when checked is false', function () {
      beforeEach(function () {
        changeSpy = spy();
        render(
          <>
            <RadioButton
              id={radioButtonId}
              label="One"
              value="one"
              name="disabledPropTest"
              disabled
              onChange={changeSpy}
            />
          </>
        );
      });
      it('renders an unchecked radio button', function () {
        const radioButton = document
          .getElementById(radioButtonId) as HTMLInputElement;
        strictEqual(radioButton.checked, false);
      });
    });
    context('when checked is true', function () {
      beforeEach(function () {
        changeSpy = spy();
        render(
          <>
            <RadioButton
              id={radioButtonId}
              label="One"
              value="one"
              name="disabledPropTest"
              disabled
              checked
              onChange={changeSpy}
            />
          </>
        );
      });
      it('renders a checked radio button', function () {
        const radioButton = document
          .getElementById(radioButtonId) as HTMLInputElement;
        strictEqual(radioButton.checked, true);
      });
    });
  });
  describe('isRequired prop', function () {
    const radioButtonId = 'testRadio';
    context('when isRequired prop is false', function () {
      beforeEach(function () {
        changeSpy = spy();
        ({ queryByText } = render(
          <>
            <RadioButton
              id={radioButtonId}
              label="Bar"
              value="bar"
              name="bar"
              onChange={changeSpy}
            />
          </>
        ));
      });
      it('does not render the asterisk (*), which denotes the input is required', function () {
        strictEqual(queryByText('*', { exact: false }), null);
      });
    });
    context('when isRequired prop is true', function () {
      beforeEach(function () {
        changeSpy = spy();
        ({ getByText } = render(
          <>
            <RadioButton
              id={radioButtonId}
              label="Baz"
              value="baz"
              name="baz"
              onChange={changeSpy}
              isRequired
            />
          </>
        ));
      });
      it('renders the asterisk (*), which denotes the input is required', function () {
        getByText('*');
      });
    });
  });
  describe('labelPosition prop', function () {
    const radioButtonId = 'testRadioLabel';
    const testLabel = 'Test Label';
    context('when labelPosition prop is equal to POSITION.RIGHT', function () {
      beforeEach(function () {
        changeSpy = spy();
        ({ queryByText } = render(
          <>
            <RadioButton
              id={radioButtonId}
              label={testLabel}
              labelPosition={POSITION.RIGHT}
              value="bar"
              name="bar"
              onChange={changeSpy}
            />
          </>
        ));
      });
      it('positions the label to the right of the radio button', function () {
        const style = window.getComputedStyle(getByText(testLabel)
          .parentNode as HTMLElement);
        strictEqual(style['grid-template-areas'], '"i l l" ". e e"');
      });
    });
    context('when labelPosition prop is equal to POSITION.LEFT', function () {
      beforeEach(function () {
        changeSpy = spy();
        ({ queryByText } = render(
          <>
            <RadioButton
              id={radioButtonId}
              label={testLabel}
              labelPosition={POSITION.LEFT}
              value="baz"
              name="baz"
              onChange={changeSpy}
            />
          </>
        ));
      });
      it('positions the label to the left of the radio button', function () {
        const style = window.getComputedStyle(getByText(testLabel)
          .parentNode as HTMLElement);
        strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
      });
    });
  });
  describe('forwardRef prop', function () {
    context('when forwardRef value is present', function () {
      const radioButtonId = 'refTest';
      beforeEach(function () {
        changeSpy = spy();
        const RefExample = () => {
          const ref = useRef<HTMLInputElement>(null);
          const onButtonClick = () => {
            if (ref.current) {
              ref.current.focus();
            }
          };
          return (
            <>
              <Button
                id="testButton"
                onClick={onButtonClick}
                variant={VARIANT.INFO}
              >
                Focus the input
              </Button>
              <RadioButton
                id={radioButtonId}
                label="refTest"
                value="refTest"
                name="refTest"
                onChange={changeSpy}
                forwardRef={ref}
              />
            </>
          );
        };
        ({ getByText } = render(
          <RefExample />
        ));
      });
      it('can be used to shift the focus to the radio button on button click', function () {
        const testButton = document.getElementById('testButton') as HTMLButtonElement;
        testButton.click();
        strictEqual(document.activeElement.id, radioButtonId);
      });
    });
  });
});
