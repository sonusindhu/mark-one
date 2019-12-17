import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler,
  ReactText, ReactNode,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';

export interface IconLinkProps {
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  /** Specifies the Font Awesome icon name */
  icon: ReactText;
  /** Specifies the tooltip text */
  title: ReactText;
  /** Specifies the alt text for screen readers */
  alt: ReactText;
  /** Allows layering of Font Awesome icons, which is possible through nesting */
  children?: ReactNode;
}

const StyledIconLink = styled.a`
  cursor: pointer;
  display: block;
`;

const IconLink: FunctionComponent<IconLinkProps> = (props): ReactElement => {
  const {
    clickHandler,
    icon,
    title,
    alt,
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledIconLink
      onClick={clickHandler}
      icon={icon}
      title={title}
      alt={alt}
      theme={theme}
    >
      { children }
    </StyledIconLink>
  );
};

export default IconLink;
