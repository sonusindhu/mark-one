import { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface PageBodyProps {
  /** Page contents */
  children?: ReactNode;
  /** The theme this component should use for styling */
  theme: BaseTheme,
}

const PageBody = styled.main<PageBodyProps>``;

export default withTheme(PageBody);
