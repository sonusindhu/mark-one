import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconLinkProps {
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** Specifies the Font Awesome icon name */
  icon: IconProp;
  /** Specifies the tooltip text */
  title: string;
  /** Specifies the alt text for screen readers */
  alt: string;
  /** Allows you to pass in style properties for the element */
  theme?: object;
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
    icon,
    title,
    alt,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledIconLink
      onClick={clickHandler}
      title={title}
      theme={theme}
      aria-label={alt}
    >
      <FontAwesomeIcon icon={icon} />
    </StyledIconLink>
  );
};

export default IconLink;
