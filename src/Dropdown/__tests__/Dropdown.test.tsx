import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy } from 'sinon';
import { strictEqual, deepStrictEqual } from 'assert';
import Dropdown from '../Dropdown';

describe('Dropdown', function () {
  let getByText;
  let changeSpy;
  let getAllByRole;
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
  beforeEach(function () {
    changeSpy = spy();
    ({ getByText, getAllByRole } = render(
      <Dropdown
        id="semesters"
        options={options}
        value="fall"
        name="semesters"
        onChange={changeSpy}
        required
      />
    ));
  });
  afterEach(function () {
    changeSpy.resetHistory();
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
  it('sets the required property to true when the required property is included', function () {
    const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
    strictEqual(dropdown.required, true);
  });
  context('when the disabled prop for the option is true', function () {
    it('sets the disabled attribute to the corresponding option element to true', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const summerOption = Array.from(dropdown.options).filter((option) => option.value === 'summer')[0];
      strictEqual(summerOption.disabled, true);
    });
  });
  context('when the disabled prop for the option is false', function () {
    it('sets the disabled attribute to the corresponding option element to false', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const springOption = Array.from(dropdown.options).filter((option) => option.value === 'spring')[0];
      strictEqual(springOption.disabled, false);
    });
  });
  context('when the disabled attribute to the corresponding option element is not provided', function () {
    it('does not set the disabled attribute to the corresponding option element', function () {
      const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
      const fallOption = Array.from(dropdown.options).filter((option) => option.value === 'fall')[0];
      strictEqual(fallOption.disabled, false);
    });
  });
});
