import React, {
  FunctionComponent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  Ref,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import Button from '../Buttons/Button';
import { ARIA_LIVE_VARIANT } from '../const';
import { fromTheme, VARIANT } from '../Theme';

export interface GlobalMessageProps {
  /** The id of the modal message */
  id?: string;
  /** Text to be displayed */
  children: ReactNode;
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
  /** The aria role of the message displayed. A list of the different role
   * values that should be used can be found in the w3 docs:
   * https://www.w3.org/TR/wai-aria-1.1/#live_region_roles
   * The default value role is 'alert.'
   * */
  role?: string;
  /** Specifies the alt text for screen readers */
  buttonAlt: string;
  /** Specifies the text on the button */
  buttonLabel: string;
  /** The value of the aria-live property */
  ariaLive?: ARIA_LIVE_VARIANT;
  /** Specifies the ref of the element */
  forwardRef?: Ref<HTMLButtonElement>;
  /** Function to call on click event */
  onClick: MouseEventHandler;
}

interface StyledGlobalMessageProps {
  /** Allows you to pass in a variant property from the VARIANT enum */
  variant: VARIANT;
}

const TextContainer = styled.div`
  grid-area: text;
`;

const ButtonContainer = styled.div`
  text-align: right;
  grid-area: button;
`;

const StyledGlobalMessage = styled.div<StyledGlobalMessageProps>`
  background: ${({ theme, variant }) => theme.color.background[variant].medium};
  color: ${({ theme, variant }) => (
    theme.color.text[variant === VARIANT.BASE ? 'dark' : 'light']
  )};
  text-align: center;
  padding: ${fromTheme('ws', 'small')};
  z-index: 1000;
  display: grid;
  grid-template: ". text button" / 1fr 2fr 1fr;
`;

const GlobalMessage: FunctionComponent<GlobalMessageProps> = (props)
: ReactElement => {
  const {
    id,
    children,
    variant,
    role,
    ariaLive,
    buttonLabel,
    buttonAlt,
    forwardRef,
    onClick,
  } = props;
  const theme = useContext(ThemeContext);
  return (
    <>
      <StyledGlobalMessage
        id={id}
        variant={variant}
        theme={theme}
        role={role}
        aria-live={ariaLive}
      >
        <TextContainer>{children}</TextContainer>
        <ButtonContainer>
          <Button
            alt={buttonAlt}
            onClick={onClick}
            variant={VARIANT.BASE}
            forwardRef={forwardRef}
          >
            { buttonLabel }
          </Button>
        </ButtonContainer>
      </StyledGlobalMessage>
    </>
  );
};

GlobalMessage.defaultProps = {
  variant: VARIANT.BASE,
  role: 'alert',
  ariaLive: ARIA_LIVE_VARIANT.ASSERTIVE,
};

export default GlobalMessage;
