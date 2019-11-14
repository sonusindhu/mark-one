import React from 'react';
import { strictEqual } from 'assert';
import { render } from 'test-utils';
import Header from '../Header';


describe('Header', function () {
  describe('background prop', function () {
    it('Should default to transparent', function () {
      render(<Header>Sample Text</Header>);
      const headerStyles = window.getComputedStyle(document.querySelector('header'));
      strictEqual(headerStyles.backgroundColor, 'transparent');
    });
    it('Should use the prop value as a background color instead', function () {
      render(<Header background="steelblue">Sample Text</Header>);
      const headerStyles = window.getComputedStyle(document.querySelector('header'));
      strictEqual(headerStyles.backgroundColor, 'steelblue');
    });
  });
  describe('justify prop', function () {
    it('Should default to space-between', function () {
      render(<Header>Sample Text</Header>);
      const headerStyles = window.getComputedStyle(document.querySelector('header'));
      strictEqual(headerStyles.justifyContent, 'space-between');
    });
    it('Should use the prop value instead', function () {
      render(<Header justify="center">Sample Text</Header>);
      const headerStyles = window.getComputedStyle(document.querySelector('header'));
      strictEqual(headerStyles.justifyContent, 'center');
    });
  });
});
