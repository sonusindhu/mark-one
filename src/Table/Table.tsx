import React, {
  FunctionComponent, ReactElement, ReactNode, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface TableProps {
  /** TODO */
  children?: ReactNode;
}

const StyledTable = styled.table`
    border: ${({ theme }): string => (theme.border.light)};
    margin: ${({ theme }): string => (theme.ws.small)};
    padding: ${({ theme }): string => (theme.ws.xsmall + ' ' + theme.ws.small)};
`;