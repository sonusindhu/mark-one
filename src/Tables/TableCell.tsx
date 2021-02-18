import { ReactNode, ReactElement, ForwardRefExoticComponent } from 'react';
import styled from 'styled-components';
import { fromTheme, TEXT_VARIANT } from '../Theme';

/** Represents the possible values for TableCell's text-align property */
export enum ALIGN {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

/** Represents the possible values for TableCell's text-align property */
export enum VALIGN {
  TOP = 'top',
  BOTTOM = 'bottom',
  CENTER = 'center',
}

export interface TableCellProps {
  /**
   * Allows you to pass in a alignment property from the ALIGN enum.
   * Defaults to ALIGN.LEFT
   */
  alignment?: ALIGN;
  /**
   * Allows for customizing the vertal alignment of the cell content
   * Defaults to VALIGN.CENTER
   */
  verticalAlignment?: VALIGN;
  /** Specifies the background color of the table cell */
  backgroundColor?: string;
  /** Allows you to pass in a variant property from the TEXT_VARIANT enum */
  variant?: TEXT_VARIANT;
  /** Text or components to be displayed in the cell */
  children: ReactNode;
}

const StyledCell = styled.td<TableCellProps>`
  border-left: ${fromTheme('border', 'light')};
  border-right: ${fromTheme('border', 'light')};
  font-family: ${fromTheme('font', 'data', 'family')};
  font-size:  ${fromTheme('font', 'data', 'size')};
  font-weight: ${({ theme, variant }) => (
    theme.font[[TEXT_VARIANT.NEGATIVE, TEXT_VARIANT.MEDIUM]
      .includes(variant)
      ? 'bold' : 'base'].weight
  )};
  color: ${({ theme, variant }) => {
    if (variant === TEXT_VARIANT.NEGATIVE) {
      return theme.color.text.negative;
    } if (variant === TEXT_VARIANT.MEDIUM) {
      return theme.color.text.medium;
    }
    return theme.color.text.base;
  }};
  padding: ${fromTheme('ws', 'xsmall')};
  text-align: ${({ alignment }) => alignment};
  vertical-align: ${({ verticalAlignment }) => verticalAlignment};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

StyledCell.defaultProps = {
  alignment: ALIGN.LEFT,
  verticalAlignment: VALIGN.CENTER,
  variant: TEXT_VARIANT.BASE,
};

/**
 * @component
 * Renders a single <td> element, for use inside of a <TableRow>
 */
const TableCell:
ForwardRefExoticComponent<TableCellProps> = StyledCell;

declare type TableCell = ReactElement<TableCellProps>;

export default TableCell;
