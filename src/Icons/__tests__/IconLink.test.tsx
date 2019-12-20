import React from 'react';
import { render, fireEvent, cleanup } from 'test-utils';
import { spy } from 'sinon';
import assert from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

describe('Icon Link', function () {
  let getByTitle;
  let clickSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByTitle } = render(
      <IconLink title="Edit account information" alt="Edit account information" clickHandler={clickSpy}>
        <FontAwesomeIcon icon={faEdit} />
      </IconLink>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
    cleanup();
  });
  it('renders', function () {
    getByTitle('Edit account information');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByTitle('Edit account information'));
    assert.equal(clickSpy.callCount, 1);
  });
});
