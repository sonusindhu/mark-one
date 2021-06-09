import React from 'react';
import { strictEqual } from 'assert';
import {
  render,
  fireEvent,
  BoundFunction,
  GetByText,
  QueryByText,
} from 'test-utils';
import {
  spy,
  SinonSpy,
} from 'sinon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import ButtonDropdownMenu from 'Buttons/ButtonDropdownMenu';
import { VARIANT } from 'Theme';
import { ButtonDropdownMenuItem } from 'Buttons';

describe('Button Dropdown Menu', function () {
  let getByLabelText: BoundFunction<GetByText>;
  let getByText: BoundFunction<GetByText>;
  let queryByText: BoundFunction<QueryByText>;
  let clickSpy: SinonSpy;
  const testLabel = '9:00AM-10:00AM';
  const times = [
    {
      startTime: '09:00',
      endTime: '10:00',
      value: '09:00-10:00',
      label: testLabel,
    },
    {
      startTime: '10:00',
      endTime: '11:00',
      value: '10:00-11:00',
      label: '10:00AM-11:00AM',
    },
  ];
  const altText = 'Timeslot button dropdown';
  beforeEach(function () {
    clickSpy = spy();
    ({ getByLabelText, getByText, queryByText } = render(
      <ButtonDropdownMenu
        alt="Timeslot button dropdown"
        label={<FontAwesomeIcon icon={faClock} size="sm" />}
        variant={VARIANT.BASE}
      >
        {times.map(({
          label,
          value,
        }) => (
          <ButtonDropdownMenuItem
            onClick={clickSpy}
            key={value}
            label={label}
            value={value}
          />
        ))}
      </ButtonDropdownMenu>
    ));
  });
  afterEach(function () {
    clickSpy.resetHistory();
  });
  it('renders', function () {
    getByLabelText(altText);
  });
  it('does not render the dropdown menu on initial load', function () {
    strictEqual(queryByText(testLabel, { exact: false }), null);
  });
  it('renders the dropdown on button click', function () {
    fireEvent.click(getByLabelText(altText));
    getByText(testLabel);
  });
  it('minimizes the dropdown menu when the dropdown button is clicked a second time', function () {
    const dropdownButton = getByLabelText(altText);
    // Initial button click
    fireEvent.click(dropdownButton);
    // Second button click
    fireEvent.click(dropdownButton);
    strictEqual(queryByText(testLabel, { exact: false }), null);
  });
  it('minimizes the dropdown menu when the document is body is clicked while the menu is expanded', function () {
    fireEvent.click(getByLabelText(altText));
    fireEvent.click(document.body);
    strictEqual(queryByText(testLabel, { exact: false }), null);
  });
  it('calls the change handler when an option in the dropdown is selected', function () {
    fireEvent.click(getByLabelText(altText));
    fireEvent.click(getByText(testLabel));
    strictEqual(clickSpy.callCount, 1);
  });
  it('minimizes the dropdown menu after a selection is made', function () {
    fireEvent.click(getByLabelText(altText));
    fireEvent.click(getByText(testLabel));
    strictEqual(queryByText(testLabel, { exact: false }), null);
  });
});
