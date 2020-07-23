import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { fromTheme } from 'Theme';

export interface IconLinkProps {
  /** Function to call on click event */
  clickHandler?: MouseEventHandler;
  /** Specifies the URL the user will be directed to when the link is clicked */
  href?: string;
  /** Specifies the tooltip text */
  title: string;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
}

const StyledIconLink = styled.a`
  background: transparent;
  color: ${fromTheme('color', 'background', 'medium')};
  &:hover {
    color: ${fromTheme('color', 'background', 'dark')};
    cursor: pointer;
  }
  display: inline-block;
`;

const IconLink: FunctionComponent<IconLinkProps> = (props): ReactElement => {
  const {
    clickHandler,
    href,
    title,
    alt,
    children,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <StyledIconLink
      onClick={clickHandler}
      href={href}
      title={title}
      theme={theme}
      aria-label={alt}
      role="link"
    >
      { children }
    </StyledIconLink>
  );
};

export default IconLink;
