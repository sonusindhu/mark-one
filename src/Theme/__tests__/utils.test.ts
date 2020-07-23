import { strictEqual } from 'assert';
import MarkOneTheme from '../MarkOneTheme';
import { VARIANT, fromTheme } from '../utils';

describe('Theme Utilities', function () {
  describe('fromTheme', function () {
    const testProps = { theme: MarkOneTheme };
    context('With two arguments', function () {
      it('Should return a function to get string values from the theme', function () {
        const getter = fromTheme('ws', 'zero');
        const result = getter(testProps);
        strictEqual(result, MarkOneTheme.ws.zero);
      });
    });
    context('With three arguments', function () {
      it('Should return a function to get string values from the theme', function () {
        const getter = fromTheme('color', 'text', 'dark');
        const result = getter(testProps);
        strictEqual(result, MarkOneTheme.color.text.dark);
      });
    });
    context('With four arguments', function () {
      it('Should return a function to get string values from the theme', function () {
        const getter = fromTheme('color', 'background', VARIANT.POSITIVE, 'dark');
        const result = getter(testProps);
        strictEqual(result, MarkOneTheme.color.background.positive.dark);
      });
    });
    context('With invalid arguments', function () {
      it('Should return a function that returns null instead of an object value', function () {
        const getter = fromTheme('color', 'background');
        const result = getter(testProps);
        strictEqual(result, null);
      });
    });
  });
});
