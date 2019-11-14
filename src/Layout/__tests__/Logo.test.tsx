import React from 'react';
import { strictEqual } from 'assert';
import { render } from 'test-utils';
import { Logo } from 'mark-one';

describe('Logo', function () {
  describe('image prop', function () {
    it('pass in the background image', function () {
      render(<Logo image="./logo.png">Sample Text</Logo>);
      const logoStyles = window.getComputedStyle(document.querySelector('a'));
      strictEqual(logoStyles.backgroundImage, 'url(./logo.png)');
    });
  });
  describe('height prop', function () {
    it('Should default to 50px', function () {
      render(<Logo>Sample Text</Logo>);
      const logoStyles = window.getComputedStyle(document.querySelector('a'));
      strictEqual(logoStyles.height, '50px');
    });
    it('Should use the prop value instead', function () {
      render(<Logo height="100px">Sample Text</Logo>);
      const logoStyles = window.getComputedStyle(document.querySelector('a'));
      strictEqual(logoStyles.height, '100px');
    });
  });
  describe('width prop', function () {
    it('Should default to 175px', function () {
      render(<Logo>Sample Text</Logo>);
      const logoStyles = window.getComputedStyle(document.querySelector('a'));
      strictEqual(logoStyles.width, '175px');
    });
    it('Should use the prop value instead', function () {
      render(<Logo width="100px">Sample Text</Logo>);
      const logoStyles = window.getComputedStyle(document.querySelector('a'));
      strictEqual(logoStyles.width, '100px');
    });
  });
});
