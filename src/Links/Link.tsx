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
import { fromTheme, VARIANT } from '../Theme';

const StyledLink = styled(ReactLink)`
  text-decoration: none;
  color: ${fromTheme('color', 'background', VARIANT.INFO, 'medium')};
  &:hover {
    text-decoration: underline;
    color: ${fromTheme('color', 'background', VARIANT.INFO, 'dark')};
  }
  &:visited {
    text-decoration: none;
    color: ${fromTheme('color', 'background', VARIANT.INFO, 'medium')};
  }
`;

/**
 * An extension of the default React Router Link component with styles overriden
 */
const Link:
FunctionComponent<LinkProps> = (props): ReactElement => {
  const {
    children,
    to,
  } = props;
  const theme = useContext(ThemeContext);
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
