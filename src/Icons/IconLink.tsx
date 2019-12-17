import React, {
  FunctionComponent, ReactElement, useContext, MouseEventHandler, ReactText,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';

export interface IconLinkProps {
  /** Function to call on click event */
  clickHandler: MouseEventHandler;
  icon: ReactText;
  title: ReactText;
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
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledIconLink
      onClick={clickHandler}
      icon={icon}
      title={title}
      theme={theme}
    />
  );
};

export default IconLink;
