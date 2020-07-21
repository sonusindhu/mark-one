import { strictEqual } from 'assert';
import MarkOneTheme from '../MarkOneTheme';
import * as utils from '../utils';

describe('Theme Utilities', function () {
  describe('fromTheme', function () {
    const testProps = { theme: MarkOneTheme };
    it('Should return a function to get string values from the theme', function () {
      const getter = utils.fromTheme('ws', 'zero');
      const result = getter(testProps);
      strictEqual(result, MarkOneTheme.ws.zero);
    });
    it('Should return a function that handles any level of depth', function () {
      const getter = utils.fromTheme('color', 'background', 'positive', 'medium');
      const result = getter(testProps);
      strictEqual(result, MarkOneTheme.color.background.positive.medium);
    });
    it('Should return a function that gets null instead of object value', function () {
      const getter = utils.fromTheme('shadow');
      const result = getter(testProps);
      strictEqual(result, null);
    });
    it('Should return a function that gets null if the value is not defined', function () {
      const getter = utils.fromTheme('color', 'bar', 'baz');
      const result = getter(testProps);
      strictEqual(result, null);
    });
  });
});
