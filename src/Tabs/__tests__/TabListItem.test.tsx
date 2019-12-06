import React from 'react';
import { render } from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import TabList from '../TabList';
import TabListItem from '../TabListItem';
import MarkOneTheme from '../../Theme/MarkOneTheme';

describe('TabListItem Component', function () {
  let getByText;
  beforeEach(function () {
    ({ getByText } = render(
      <TabList>
        <TabListItem>Tab 1</TabListItem>
        <TabListItem isActive data-testid="activeTabItem">Tab 2</TabListItem>
        <TabListItem data-testid="inactiveTabItem">Tab 3</TabListItem>
      </TabList>
    ));
  });
  describe('Tab Item', function () {
    it('renders its children', function () {
      getByText('Tab 1');
      getByText('Tab 2');
      getByText('Tab 3');
    });
    it('renders a tab item with the light theme background color when isActive is true', function () {
      const tabItem = getByText('Tab 2');
      const style = window.getComputedStyle(tabItem);
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.light as string
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
  });
});
