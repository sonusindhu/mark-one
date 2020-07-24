import React, {
  ReactElement, ReactNode, FunctionComponent, useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { fromTheme } from '../Theme';

export interface TabListItemProps {
  /** Text or components to be displayed in the TabList item */
  children: ReactNode;
  /** Controls whether the TabListItem is in focus */
  isActive?: boolean;
}

const TabListItemBox = styled.div<TabListItemProps>`
  background: ${({ theme, isActive }) => (isActive ? theme.color.background.light : 'transparent')};
  border: ${({ theme, isActive }) => (isActive ? theme.border.hairline : '1px solid transparent')};
  border-bottom: ${({ isActive }) => (isActive ? '1px solid transparent' : 'none')};
  color: ${fromTheme('color', 'text', 'dark')};
  display: inline-block;
  padding: 0.5rem 1rem;
  &:hover {
    border: ${fromTheme('border', 'hairline')};
    border-bottom: ${({ isActive }) => (isActive ? '1px solid transparent' : 'none')};
    color: ${fromTheme('color', 'text', 'dark')};
  }
`;

const TabListItemWrapper = styled.li`
  margin-bottom: -1px;
  padding: 0 1em;
`;

const TabListItem:
FunctionComponent<TabListItemProps> = (props): ReactElement => {
  const {
    children,
    isActive,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <TabListItemWrapper>
      <TabListItemBox theme={theme} isActive={isActive}>
        {children}
      </TabListItemBox>
    </TabListItemWrapper>
  );
};

TabListItemBox.defaultProps = {
  isActive: false,
};

declare type TabListItem = ReactElement<TabListItemProps>;

export default TabListItem;
