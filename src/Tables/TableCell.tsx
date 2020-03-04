import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

/** Represents the possible values for TableCell's text-align property */
export enum ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface TableCellProps {
  /** Text or components to be displayed in the cell */
  children: ReactNode;
  /** Allows you to pass in a alignment property from the ALIGN enum */
  alignment?: ALIGN;
}

const StyledCell = styled.td<TableCellProps>`
  border-left: ${({ theme }): string => (theme.border.light)};
  border-right: ${({ theme }): string => (theme.border.light)};
  font-family: ${({ theme }): string => (theme.font.data.family)};
  font-size: ${({ theme }): string => (theme.font.data.size)};
  padding: ${({ theme }): string => (theme.ws.xsmall)};
  text-align: ${({ alignment }): string => alignment};
`;

StyledCell.defaultProps = {
  alignment: ALIGN.LEFT,
};

const TableCell: FunctionComponent<TableCellProps> = (props): ReactElement => {
  const {
    children,
    alignment,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledCell
      theme={theme}
      alignment={alignment}
    >
      {children}
    </StyledCell>
  );
};

export default TableCell;
