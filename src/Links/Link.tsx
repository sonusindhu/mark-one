import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseTheme } from '../Theme';

export interface LinkProps {
  /** Text or components to be displayed as a representation of the link */
  children: ReactNode;
  /** A string that represents the link path */
  to: string;
}

const StyledTabLink = styled(Link)`
  text-decoration: none;
`;

const TabLink: FunctionComponent<LinkProps> = (props): ReactElement => {
  const {
    children,
    to,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledTabLink
      to={to}
      theme={theme}
    >
      { children }
    </StyledTabLink>
  );
};

export default TabLink;
