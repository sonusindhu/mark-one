import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import Dropdown from '../Dropdown';
import DropdownOption from '../DropdownOption';

describe('Dropdown', function () {
  let getByText;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <Dropdown name="semesters" onChangeHandler={clickSpy}>
        <DropdownOption value="all">All</DropdownOption>
        <DropdownOption value="fall">Fall</DropdownOption>
        <DropdownOption value="spring">Spring</DropdownOption>
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
