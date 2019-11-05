import { cleanup } from '@testing-library/react';
process.env.RTL_SKIP_AUTO_CLEANUP = 'true';

afterEach(cleanup);
