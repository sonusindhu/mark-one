import React from 'react';
import { render, cleanup } from 'test-utils';
import { strictEqual } from 'assert';
import NavList from '../TabList';
import NavItem from '../TabListItem';

describe('Navigation Component', function () {
  let getAllByRole;
  beforeEach(function () {
    ({ getAllByRole } = render(
      <NavList>
        <NavItem isActive={false}>Tab 1</NavItem>
        <NavItem isActive data-testid="activeNavItem">Tab 2</NavItem>
        <NavItem isActive={false} data-testid="inactiveNavItem">Tab 3</NavItem>
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
});
