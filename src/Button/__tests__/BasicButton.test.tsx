import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { spy } from 'sinon';
import assert from 'assert';
import BasicButton from '../BasicButton';

describe('Basic Button', function () {
  let getByText;
  let clickSpy;
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
  it('calls the click handler', function () {
    fireEvent.click(getByText('Click You'));
    assert.equal(clickSpy.callCount, 1);
  });
});
