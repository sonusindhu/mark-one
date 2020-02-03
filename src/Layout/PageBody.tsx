import { ReactNode, ReactElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
  /** The theme this component should use for styling */
  theme: BaseTheme;
}

const PageBody = styled.main<PageBodyProps>``;

declare type PageBody = ReactElement<PageBodyProps>;

export default withTheme(PageBody);
