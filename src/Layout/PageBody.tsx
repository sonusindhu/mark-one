import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { fromTheme } from '../Theme';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
}

const PageBody = styled.main<PageBodyProps>`
  margin: ${fromTheme('ws', 'small')};
`;

declare type PageBody = ReactElement<PageBodyProps>;

export default withTheme(PageBody);
