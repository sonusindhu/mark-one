import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import Dropdown from '../Dropdown';

describe('Dropdown', function () {
  let getByText;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <Dropdown name="semesters" onChangeHandler={clickSpy}>
        <option>All</option>
        <option>Fall</option>
        <option>Spring</option>
      </Dropdown>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
    cleanup();
  });
  it('renders', function () {
    getByText('Spring');
  });
  it('calls the change handler when clicked', function () {
    fireEvent.change(clickSpy);
    assert.equal(clickSpy.callCount, 1);
  });
});
