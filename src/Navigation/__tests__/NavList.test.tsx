import React from 'react';
import { render, cleanup } from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import NavList from '../NavList';
import NavItem from '../NavItem';
import MarkOneTheme from '../../Theme/MarkOneTheme';

describe('Navigation Components', function () {
  let getByText;
  let getAllByRole;
  let getByTestId;
  beforeEach(function () {
    ({ getByText, getAllByRole, getByTestId } = render(
      <NavList>
        <NavItem isActive={false}>Tab 1</NavItem>
        <NavItem isActive data-testid="activeNavItem">Tab 2</NavItem>
        <NavItem isActive={false}>Tab 3</NavItem>
      </NavList>
    ));
  });
  afterEach(function () {
    cleanup();
  });
  describe('Nav List', function () {
    it('renders every nav item', function () {
      const listItemCount = getAllByRole('listitem').length;
      strictEqual(listItemCount, 3);
    });
  });
  describe('Nav Item', function () {
    it('contains text', function () {
      getByText('Tab 1');
    });
    it('renders a nav item with the light theme background color when isActive is true', function () {
      const navItem = getByTestId('activeNavItem');
      const style = window.getComputedStyle(navItem);
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.light as string
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
  });
});
