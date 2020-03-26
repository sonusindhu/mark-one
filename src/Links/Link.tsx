import React, {
  FunctionComponent,
  ReactElement,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  Link as ReactLink,
  LinkProps,
} from 'react-router-dom';
import { BaseTheme } from '../Theme';

const StyledLink = styled(ReactLink)`
  text-decoration: none;
  color: ${({ theme }): string => (theme.color.background.info.medium)};
  &:hover {
    text-decoration: underline;
    color: ${({ theme }): string => (theme.color.background.info.dark)};
  }
  &:visited {
    text-decoration: none;
    color: ${({ theme }): string => (theme.color.background.info.medium)};
  }
`;

const Link:
FunctionComponent<LinkProps> = (props): ReactElement => {
  const {
    children,
    to,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledLink
      to={to}
      theme={theme}
    >
      { children }
    </StyledLink>
  );
};

export default Link;
