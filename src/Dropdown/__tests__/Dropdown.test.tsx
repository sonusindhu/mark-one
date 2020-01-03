import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import Dropdown from '../Dropdown';

describe('Dropdown', function () {
  let getByText;
  let changeSpy;
  beforeEach(function () {
    changeSpy = spy();
    ({ getByText } = render(
      <Dropdown
        options={[
          {
            value: 'all', label: 'All',
          },
          {
            value: 'fall', label: 'Fall',
          },
          {
            value: 'spring', label: 'Spring',
          },
        ]}
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
    assert.equal(changeSpy.callCount, 1);
  });
});
