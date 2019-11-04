import React, {
  FunctionComponent, ReactElement, useContext, ReactNode,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'mark-one';

export interface PageBodyProps {
  children: ReactNode;
}

const MainComponent = styled.main``;

const PageBody: FunctionComponent<PageBodyProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <MainComponent theme={theme}>
      {children}
    </MainComponent>
  );
};

export default PageBody;
