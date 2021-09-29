import React from 'react';
import { render } from 'test-utils';
import { strictEqual } from 'assert';
import List from '../List';
import ListItem from '../ListItem';

describe('List', function () {
  describe('Ordering', function () {
    context('With the ordered prop', function () {
      it('Should use an <ol> element', function () {
        const { getByRole } = render(
          <List ordered>
            <ListItem>One</ListItem>
            <ListItem>Two</ListItem>
            <ListItem>Three</ListItem>
          </List>
        );
        const listElement = getByRole('list');
        strictEqual(listElement.tagName, 'OL');
      });
    });
    context('Without the ordered prop', function () {
      it('Should use an <ul> element', function () {
        const { getByRole } = render(
          <List>
            <ListItem>Dogs</ListItem>
            <ListItem>Cats</ListItem>
            <ListItem>Fish</ListItem>
          </List>
        );
        const listElement = getByRole('list');
        strictEqual(listElement.tagName, 'UL');
      });
    });
  });
});
