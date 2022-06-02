import React, {
  Ref,
  FunctionComponent,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import { fromTheme } from 'mark-one';

/**
 * Expected props for a Popover Component
 */

interface PopoverProps {
  /**
   * The content that will appear inside the body of the popover
   */
  children: ReactNode;
  /**
   * An optional passthrough className to allow restyling the Popover
   * Will be applied to the PopoverWrapper, allowing for cascading styles to be
   * applied to the internal components
   */
  className?: string;
  /**
   * An optional forwarded Ref that will be attached to the PopoverBody, e.g.
   * for focusing the content
   */
  forwardRef?: Ref<HTMLDivElement>;
  /**
   * Control whether the Popover should be displayed on the page.
   */
  isVisible: boolean;
  /**
   * The optional content that will appear as the heading of the Popover
   */
  title?: ReactNode;
  /**
   * The Optional  offset that should be applied to the left side of the the
   * Popover element, relative to its placement in the DOM.
   * Should specified in pi, em, rem, % or 0.
   */
  xOffset?: string;
  /**
   * The Optional  offset that should be applied to the bottom of the the
   * Popover element, relative to its placement in the DOM.
   * Should specified in pi, em, rem, % or 0.
   */
  yOffset?: string;
}

/**
 * Sets the amount of offset that should be applied to the Popover element
 */
interface PopoverWrapperProps {
  /**
   * Sets the position of the left edge of the Popover
   */
  left: PopoverProps['xOffset'];
  /**
   * Sets the position of the bottom edge of the Popover
   */
  bottom: PopoverProps['yOffset'];
}

const PopoverPlaceholder = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
`;

/**
 * Applies styles to the PopoverWrapper, using cascading styles to style the
 * internal title and body. This allows for restyling the entire componed by
 * wrapping it, e.g. styled(Popover)
 */
const PopoverWrapper = styled.div<PopoverWrapperProps>`
  border: ${fromTheme('border', 'hairline')};
  box-shadow: ${fromTheme('shadow', 'xlight')};
  position: absolute;
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  color: ${fromTheme('color', 'text', 'dark')};
  max-width: 10em;
  width: max-content;
  z-index: 10;
  > div.mark-one__popover-heading {
    background-color: ${fromTheme('color', 'background', 'subtle')};
    padding: ${fromTheme('ws', 'xsmall')};
    border-bottom: ${fromTheme('border', 'hairline')};
    font-family: ${fromTheme('font', 'bold', 'family')};
    font-size: ${fromTheme('font', 'bold', 'size')};
    font-weight: ${fromTheme('font', 'bold', 'weight')};
  }
  > div.mark-one__popover-body {
    background-color: ${fromTheme('color', 'background', 'light')};
    font-family: ${fromTheme('font', 'note', 'family')};
    font-weight: ${fromTheme('font', 'note', 'weight')};
    font-size: ${fromTheme('font', 'note', 'size')};
    padding: ${fromTheme('ws', 'xsmall')};
  }
`;

/**
 * Renders a small popup notification next to an element on the page.
 * By default the Popover will appear directly above and to the right of its
 * location in the DOM, but the xOffset and yOffset props can be used to move
 * it elsewhere
 */

const Popover: FunctionComponent<PopoverProps> = ({
  children,
  className,
  forwardRef,
  isVisible,
  title,
  xOffset,
  yOffset,
}) => (
  <PopoverPlaceholder>
    {isVisible
      ? (
        <PopoverWrapper
          className={className}
          left={xOffset}
          bottom={yOffset}
        >
          {title
            ? (
              <div className="mark-one__popover-heading">
                {title}
              </div>
            )
            : null}
          <div className="mark-one__popover-body" ref={forwardRef}>
            {children}
          </div>
        </PopoverWrapper>
      )
      : null}
  </PopoverPlaceholder>
);

/**
 * Sets a default level of padding to the left (x) and bottom (y) of the
 * popover
 */
Popover.defaultProps = {
  xOffset: '0',
  yOffset: '0',
};

export default Popover;
