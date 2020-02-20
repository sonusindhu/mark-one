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
      <>
        <BasicButton clickHandler={clickSpy}>
          Click You
        </BasicButton>
        <BasicButton disabled clickHandler={clickSpy}>
          Not Clickable
        </BasicButton>
      </>
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
  it('does not call the click handler when button prop disabled is truthy', function () {
    fireEvent.click(getByText('Not Clickable'));
    assert.strictEqual(clickSpy.callCount, 0);
  });
});
