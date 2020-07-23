import React, { useRef } from 'react';
import {
  render,
  fireEvent,
  BoundFunction,
  AllByRole,
  GetByRole,
  GetByText,
  QueryByText,
} from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import { strictEqual, deepStrictEqual } from 'assert';
import { POSITION } from '../Label';
import { Button } from '../../Buttons';
import { VARIANT } from '../../Theme';
import Dropdown from '../Dropdown';

describe('Dropdown', function () {
  let getByText: BoundFunction<GetByText>;
  let getByRole: BoundFunction<GetByRole>;
  let getAllByRole: BoundFunction<AllByRole>;
  let queryByText: BoundFunction<QueryByText>;
  let changeSpy: SinonSpy;
  const options = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'fall',
      label: 'Fall',
    },
    {
      value: 'spring',
      label: 'Spring',
      disabled: false,
    },
    {
      value: 'summer',
      label: 'Summer',
      disabled: true,
    },
  ];
  context('when errorMessage prop is present', function () {
    const dropdownId = 'semesters';
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getByRole, getAllByRole } = render(
        <Dropdown
          id={dropdownId}
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          errorMessage="Error: Please select a semester."
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('renders the error message', function () {
      getByText('Please select a semester', { exact: false });
    });
    it('Sets the aria-errormessage on the dropdown', function () {
      const dropdown = getByRole('combobox');
      strictEqual(
        dropdown.getAttribute('aria-errormessage'),
        `${dropdownId}-error`
      );
    });
    it('Sets the id on the error message', function () {
      const errorMessage = getByRole('alert');
      strictEqual(errorMessage.id, `${dropdownId}-error`);
    });
    it('Sets aria-invalid', function () {
      const dropdown = getByRole('combobox');
      strictEqual(
        dropdown.getAttribute('aria-invalid'),
        'true'
      );
    });
  });
  context('when the errorMessage prop is not present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({
        getByText, getByRole, getAllByRole, queryByText,
      } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('does not render the error message', function () {
      strictEqual(queryByText('Error: Please select a semester', { exact: false }), null);
    });
    it('Does not set aria-invalid', function () {
      const dropdown = getByRole('combobox');
      strictEqual(dropdown.hasAttribute('aria-invalid'), false);
    });
  });
  context('when isRequired prop is present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          isRequired
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('renders the asterisk (*) denoting that the field is required', function () {
      getByText('*');
    });
  });
  context('when isRequired prop is not present', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole, queryByText } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('does not render the asterisk (*), which denotes that the field is required', function () {
      strictEqual(queryByText('*', { exact: false }), null);
    });
  });
  context('when isLabelVisible prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole, queryByText } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          isLabelVisible
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('has a visible label', function () {
      getByText('semesters');
    });
  });
  context('when isLabelVisible prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole, queryByText } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          isLabelVisible={false}
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('the label value is hidden in the UI', function () {
      const style = window.getComputedStyle(getByText('semesters'));
      strictEqual(style.display, 'none');
    });
  });
  context('when disabled prop is true', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
        />
      ));
    });
    it('sets the disabled attribute to the corresponding option element to true', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const summerOption = Array.from(dropdown.options).filter((option) => option.value === 'summer')[0];
      strictEqual(summerOption.disabled, true);
    });
  });
  context('when disabled prop is false', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
        />
      ));
    });
    it('sets the disabled attribute to the corresponding option element to false', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const springOption = Array.from(dropdown.options).filter((option) => option.value === 'spring')[0];
      strictEqual(springOption.disabled, false);
    });
  });
  context('when the disabled attribute to the corresponding option element is not provided', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
        />
      ));
    });
    it('does not set the disabled attribute to the corresponding option element', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const fallOption = Array.from(dropdown.options).filter((option) => option.value === 'fall')[0];
      strictEqual(fallOption.disabled, false);
    });
  });
  context('when labelPosition prop is POSITION.TOP', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          labelPosition={POSITION.TOP}
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('positions the label above the dropdown', function () {
      const style = window.getComputedStyle(getByText('semesters').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l l l" "i i i" "e e e"');
    });
  });
  context('when labelPosition prop is POSITION.LEFT', function () {
    beforeEach(function () {
      changeSpy = spy();
      ({ getByText, getAllByRole } = render(
        <Dropdown
          id="semesters"
          options={options}
          value="fall"
          label="semesters"
          name="semesters"
          onChange={changeSpy}
          labelPosition={POSITION.LEFT}
        />
      ));
    });
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('contains the correct value, label, and disabled value for each dropdown item', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const optionsFound = Array.from(dropdown.options).map((element) => ({
        disabled: element.disabled,
        value: element.value,
        label: element.label,
      }));
      const optionsWithDefaults = options.map((option) => (
        {
          ...option,
          disabled: Boolean(option.disabled),
        }
      ));
      deepStrictEqual(optionsFound, optionsWithDefaults);
    });
    it('positions the label to the left of the dropdown', function () {
      const style = window.getComputedStyle(getByText('semesters').parentNode as HTMLElement);
      strictEqual(style['grid-template-areas'], '"l i i" ". e e"');
    });
  });
  context('when forwardRef prop is present', function () {
    const dropdownId = 'semester';
    beforeEach(function () {
      changeSpy = spy();
      const RefExample = () => {
        const ref = useRef<HTMLSelectElement>(null);
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
            <Dropdown
              id={dropdownId}
              options={options}
              value="fall"
              label="semesters"
              name="semesters"
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
    it('renders', function () {
      getByText('Spring');
    });
    it('calls the change handler when changed', function () {
      fireEvent.change(document.getElementsByName('semesters')[0]);
      strictEqual(changeSpy.callCount, 1);
    });
    it('contains the expected elements', function () {
      const dropdownOptionsCount = getAllByRole('option').length;
      strictEqual(dropdownOptionsCount, options.length);
    });
    it('renders the correct default value', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const defaultValue = dropdown.value;
      strictEqual(defaultValue, 'fall');
    });
    it('can be used to shift the focus to the dropdown on button click', function () {
      const testButton = document.getElementById('testButton') as HTMLButtonElement;
      testButton.click();
      strictEqual(document.activeElement.id, dropdownId);
    });
  });
});
