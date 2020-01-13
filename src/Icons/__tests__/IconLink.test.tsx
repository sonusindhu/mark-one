import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from 'test-utils';
import { spy } from 'sinon';
import { strictEqual } from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

describe('Icon Link', function () {
  let getByTestId;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByTestId } = render(
      <IconLink title="Edit account information" alt="Edit account information" clickHandler={clickSpy}>
        <FontAwesomeIcon icon={faEdit} data-testid="test-icon" />
      </IconLink>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
    cleanup();
  });
  it('renders', function () {
    getByTestId('test-icon');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByTestId('test-icon'));
    assert.equal(clickSpy.callCount, 1);
  });
  it('renders the correct icon', function () {
    const iconName = getByTestId('test-icon').className.baseVal.split(' ')[1];
    strictEqual(iconName, 'fa-edit');
  });
});
