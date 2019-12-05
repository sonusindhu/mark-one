import {
  ReactElement, ReactNode,
} from 'react';
import styled, { withTheme } from 'styled-components';

export interface TabListItemProps {
  /** Text or components to be displayed in the TabList item */
  children: ReactNode;
  /** Controls whether the TabListItem is in focus */
  isActive: boolean;
}

const StyledTabListItem = styled.li<TabListItemProps>`
  background: ${({ theme, isActive }): string => (isActive ? theme.color.background.light : theme.color.background.subtle)};
  border: ${({ theme }): string => theme.border.hairline};
  border-bottom: ${({ theme, isActive }): string => (isActive ? '1px solid transparent' : theme.border.hairline)};
  color: ${({ theme, isActive }): string => (isActive ? theme.color.text.medium : theme.color.text.info)};
  display: inline-block;
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  &:hover {
    border: ${({ theme }): string => (theme.border.hairline)};
    border-bottom: ${(): string => ('1px solid transparent')};
    color: ${({ theme }): string => (theme.color.text.medium)};
  }
`;

export type TabListItem = ReactElement<TabListItemProps>;

export default withTheme(StyledTabListItem);
