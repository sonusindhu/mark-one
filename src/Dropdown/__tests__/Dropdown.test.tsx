import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import { strictEqual, deepStrictEqual } from 'assert';
import Dropdown from '../Dropdown';

describe('Dropdown', function () {
  let getByText;
  let changeSpy;
  let getAllByRole;
  const options = [
    {
      value: 'all', label: 'All',
    },
    {
      value: 'fall', label: 'Fall',
    },
    {
      value: 'spring', label: 'Spring',
    },
  ];
  beforeEach(function () {
    changeSpy = spy();
    ({ getByText, getAllByRole } = render(
      <Dropdown
        options={options}
        value="fall"
        name="semesters"
        onChange={changeSpy}
      />
    ));
  });
  afterEach(function () {
    changeSpy.resetHistory();
    cleanup();
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
    strictEqual(dropdownOptionsCount, 3);
  });
  it('renders the correct default value', function () {
    const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
    const defaultValue = dropdown.value;
    strictEqual(defaultValue, 'fall');
  });
  it('contains the correct value and label for each dropdown item', function () {
    const dropdown = document.getElementsByName('semesters')[0] as HTMLSelectElement;
    const optionsFound = Array.from(dropdown.options).map((element) => ({
      value: element.value,
      label: element.label,
    }));
    deepStrictEqual(optionsFound, options);
  });
});
