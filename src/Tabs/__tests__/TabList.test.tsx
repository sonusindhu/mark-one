import React from 'react';
import { render } from 'test-utils';
import { strictEqual } from 'assert';
import TabList from '../TabList';
import TabListItem from '../TabListItem';

describe('Tabigation Component', function () {
  let getAllByRole;
  beforeEach(function () {
    ({ getAllByRole } = render(
      <TabList>
        <TabListItem isActive={false}>Tab 1</TabListItem>
        <TabListItem isActive data-testid="activeTabItem">Tab 2</TabListItem>
        <TabListItem isActive={false} data-testid="inactiveTabItem">Tab 3</TabListItem>
      </TabList>
    ));
  });
  describe('Tab List', function () {
    it('renders a <ul>', function () {
      const tabListCount = getAllByRole('list').length;
      strictEqual(tabListCount, 1);
    });
  });
});
