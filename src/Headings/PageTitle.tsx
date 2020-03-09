import React, {
  FunctionComponent,
  ReactElement,
  useContext,
  ReactNode,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface PageHeadingProps {
  /** Page heading text */
  children: ReactNode;
}

const Heading = styled.h1`
  font-family: ${({ theme }): string => theme.font.title.family};
  font-size: ${({ theme }): string => theme.font.title.size};
  font-weight: ${({ theme }): string => theme.font.title.weight};
  color: ${({ theme }): string => theme.font.title.color};
`;

const PageTitle: FunctionComponent<PageHeadingProps> = (props):
ReactElement => {
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
