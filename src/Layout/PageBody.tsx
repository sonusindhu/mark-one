import { ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface PageBodyProps {
  children?: ReactNode;
  theme: BaseTheme,
}

const PageBody = styled.main<PageBodyProps>``;

export default withTheme(PageBody);
