import { ReactElement } from 'react';
import {
  render,
  RenderResult,
  RenderOptions,
} from '@testing-library/react';
import { MarkOneWrapper } from '../../Theme';

/**
 * In order to use our theme context in tests, we need to wrap all of our
 * rendered components in the [[MarkOneWrapper]]. Since that sounds tedious, we
 * can instead re-define the `render` function, then export from this module
 * and create a ts-paths alias to 'test-utils'
 */

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: MarkOneWrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
