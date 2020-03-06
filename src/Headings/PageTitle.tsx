import React, {
  FunctionComponent,
  ReactElement,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

const Heading = styled.h1`
  font-family: ${({ theme }): string => theme.font.heading.family};
  font-size: ${({ theme }): string => theme.font.heading.size};
  font-weight: ${({ theme }): string => theme.font.heading.weight};
  color: ${({ theme }): string => theme.font.heading.color};
`;

const PageTitle: FunctionComponent = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <Heading
      theme={theme}
    >
      { children }
    </Heading>
  );
};

PageTitle.defaultProps = {
  children: '',
};

export default PageTitle;
