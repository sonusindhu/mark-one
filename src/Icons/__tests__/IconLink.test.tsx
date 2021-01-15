import React from 'react';
import {
  render, fireEvent, BoundFunction, GetByRole,
} from 'test-utils';
import { spy, SinonSpy } from 'sinon';
import { strictEqual } from 'assert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import IconLink from '../IconLink';

describe('Icon Link', function () {
  let getByRole: BoundFunction<GetByRole>;
  let clickSpy: SinonSpy;
  beforeEach(function () {
    clickSpy = spy();
    ({ getByRole } = render(
      <IconLink title="Edit account information" alt="Edit account information" clickHandler={clickSpy}>
        <FontAwesomeIcon icon={faEdit} />
      </IconLink>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByRole('link');
  });
  it('calls the click handler when clicked', function () {
    fireEvent.click(getByRole('link'));
    strictEqual(clickSpy.callCount, 1);
  });
  it('renders the correct icon', function () {
    const iconName = getByRole('img', { hidden: true });
    const classes = Array.from(iconName.classList);
    strictEqual(classes.includes('fa-edit'), true);
  });
});
