import React, {
    ReactElement,
    useContext,
  } from 'react';
import { ChangeEventHandler, FunctionComponent } from "react";
import styled, { ThemeContext } from 'styled-components';
import { BaseTheme } from 'Theme';

export interface TextInputProps {
    /** Function to call on change event */
    onChange: ChangeEventHandler;
    /** The id of the text input field */
    id: string;
}

const StyledTextInput = styled.input`
    border: ${({ theme }): string => (theme.border.light)};
    border-radius: .25rem;
    display: block;
    width: 100%;
`;

const TextInput: FunctionComponent<TextInputProps> = (props): ReactElement => {
    const {
        onChange,
        id,
    } = props;
    const theme: BaseTheme = useContext(ThemeContext);
    return (
        <StyledTextInput
            onChange={onChange}
            id={id}
        >
        </StyledTextInput>
    )
};

export default TextInput;
