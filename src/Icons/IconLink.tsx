import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { BaseTheme } from '../Theme';

export interface IconLinkProps {
  /** Function to call on click event */
  clickHandler?: MouseEventHandler;
  /** Specifies the URL the user will be directed to when the link is clicked */
  href?: string;
  /** Specifies the tooltip text */
  title: string;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Allows you to pass in style properties for the element */
  theme?: object;
  /** Specifies the Font Awesome Icon(s) */
  children: ReactElement<FontAwesomeIconProps>;
}

const StyledIconLink = styled.a`
  background: transparent;
  color: ${({ theme }): string => (theme.color.background.medium)};
  &:hover {
    color: ${({ theme }): string => (theme.color.background.dark)};
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
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledIconLink
      onClick={clickHandler}
      href={href}
      title={title}
      theme={theme}
      aria-label={alt}
    >
      { children }
    </StyledIconLink>
  );
};

export default IconLink;
