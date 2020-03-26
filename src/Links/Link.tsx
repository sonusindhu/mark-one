import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { BaseTheme } from '../Theme';

export interface LinkProps {
  /** Text or components to be displayed as a representation of the link */
  children: ReactNode;
  /** A string that represents the link path */
  to: string;
}

const StyledLink = styled(ReactLink)`
  text-decoration: none;
  color: ${({ theme }): string => (theme.color.background.info.medium)};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }): string => (theme.color.background.info.dark)};
  }
`;

const Link:
FunctionComponent<LinkProps> = (props): ReactElement => {
  const {
    children,
    to,
    onClick,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLink
      to={to}
      theme={theme}
      onClick={onClick}
    >
      { children }
    </StyledLink>
  );
};

export default Link;
