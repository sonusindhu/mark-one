import React from 'react';
import { render, fireEvent } from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import assert from 'assert';
import BasicButton from '../BasicButton';

describe('Basic Button', function () {
  let getByText;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByText } = render(
      <BasicButton clickHandler={clickSpy}>
        Click You
      </BasicButton>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByText('Click You');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByText('Click You'));
    assert.strictEqual(clickSpy.callCount, 1);
  });
});
