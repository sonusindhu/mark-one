import React from 'react';
import { render } from 'test-utils';
import convert from 'color-convert';
import { strictEqual } from 'assert';
import TabList from '../TabList';
import TabListItem from '../TabListItem';
import MarkOneTheme from '../../Theme/MarkOneTheme';

describe('Tabigation Component', function () {
  let getByText;
  let getByTestId;
  beforeEach(function () {
    ({ getByText, getByTestId } = render(
      <TabList>
        <TabListItem>Tab 1</TabListItem>
        <TabListItem isActive data-testid="activeTabItem">Tab 2</TabListItem>
        <TabListItem data-testid="inactiveTabItem">Tab 3</TabListItem>
      </TabList>
    ));
  });
  describe('Tab Item', function () {
    it('contains text', function () {
      getByText('Tab 1');
    });
    it('renders a tab item with the light theme background color when isActive is true', function () {
      const tabItem = getByTestId('activeTabItem');
      const style = window.getComputedStyle(tabItem);
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.light as string
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
    it('renders a tab item with the subtle theme background color when isActive is false', function () {
      const tabListItem = getByTestId('inactiveTabItem');
      const style = window.getComputedStyle(tabListItem);
      const [red, green, blue] = convert.hex.rgb(
        MarkOneTheme.color.background.subtle as string
      );
      const convertExpectedToRGB = `rgb(${red}, ${green}, ${blue})`;
      strictEqual(style.backgroundColor, convertExpectedToRGB);
    });
  });
});
