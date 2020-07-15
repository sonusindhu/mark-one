import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
}

const PageBody = styled.main<PageBodyProps>`
  margin: ${({ theme }): string => (theme.ws.small)};
`;

declare type PageBody = ReactElement<PageBodyProps>;

export default withTheme(PageBody);
