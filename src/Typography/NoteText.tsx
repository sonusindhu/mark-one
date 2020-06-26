import React, {
  FunctionComponent,
  ReactElement,
  useContext,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from '../Theme';

export interface NoteTextProps {
  /** Text to be displayed */
  children: string;
}

const StyledNoteText = styled.span`
  color: ${({ theme }): string => (theme.font.note.color)};
  font-family: ${({ theme }): string => (theme.font.note.family)};
  font-size: ${({ theme }): string => (theme.font.note.size)};
  font-weight: ${({ theme }): string => (theme.font.note.weight)};
`;

const NoteText: FunctionComponent<NoteTextProps> = (props): ReactElement => {
  const {
    children,
  } = props;
  const theme: BaseTheme = useContext(ThemeContext);
  return (
    <StyledNoteText
      theme={theme}
    >
      {children}
    </StyledNoteText>
  );
};

export default NoteText;
