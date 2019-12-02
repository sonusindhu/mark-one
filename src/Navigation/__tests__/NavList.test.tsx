import React from 'react';
import { render, cleanup } from 'test-utils';
import NavList from '../NavList';
import NavItem from '../NavItem';

describe('Navigation Components', function () {
  let getByText;
  beforeEach(function () {
    ({ getByText } = render(
      <NavList>
        <NavItem isActive={false}>Tab 1</NavItem>
        <NavItem isActive>Tab 2</NavItem>
        <NavItem isActive={false}>Tab 3</NavItem>
      </NavList>
    ));
  });
  afterEach(function () {
    cleanup();
  });
  describe('Nav Item', function () {
    it('contains text', function () {
      getByText('Tab 1');
    });
  });
});
