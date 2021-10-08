import React from 'react';
import { render, screen, within } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { stub, spy } from 'sinon';
import { strictEqual } from 'assert';
import Combobox, { ComboboxOption } from '../Combobox';

const options = [
  {
    label: 'Apples',
    value: 'a',
  },
  {
    label: 'Granny Smith Apples',
    value: 'g',
  },
  {
    label: 'Honeycrisp Apples',
    value: 'h',
  },
  {
    label: 'Macoun Apples',
    value: 'm',
  },
  {
    label: 'Red Delicious Apples',
    value: 'r',
  },
  {
    label: 'Bananas',
    value: 'b',
  },
  {
    label: 'Cucumbers',
    value: 'c',
  },
  {
    label: 'Donuts',
    value: 'd',
  },
];

describe('Combobox', function () {
  describe('List filtering', function () {
    context('Default filtering function', function () {
      it('Should show options that match against the beginning of the string', async function () {
        const SelectionStub = stub();
        render(
          <Combobox
            options={options}
            label="Food (Default Search)"
            currentValue={null}
            onOptionSelected={SelectionStub}
          />
        );
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'apple');
        const menu = screen.getByRole('listbox');
        const apples = within(menu).getAllByText(/apple/i);
        strictEqual(apples.length, 1);
        strictEqual(menu.children.length, apples.length);
      });
    });
    context('With a custom filtering function', function () {
      it('Should perform perform the custom search instead', async function () {
        const SelectionStub = stub();
        const customFilter = (option: ComboboxOption, inputValue: string) => {
          const re = new RegExp(inputValue, 'i');
          return re.test(option.label);
        };
        const filterSpy = spy(customFilter);
        render(
          <Combobox
            options={options}
            label="Food (Default Search)"
            currentValue={null}
            onOptionSelected={SelectionStub}
            filterFunction={filterSpy}
          />
        );
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'apple');
        strictEqual(filterSpy.callCount, options.length * 'apple'.length, 'Did not call the filterFunction for each entry');
        const menu = screen.getByRole('listbox');
        const apples = within(menu).getAllByText(/apple/i);
        strictEqual(apples.length, 5, 'Returned more apples than are included in list');
        strictEqual(menu.children.length, apples.length, 'Rendered entries that did not include "apples"');
      });
    });
  });
});
