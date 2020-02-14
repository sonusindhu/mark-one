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
    /** The name of the text input field*/
    name: string;
    /** The placeholder value of the input field */
    placeholder?: string;
    /** Specifies the type of input */
    type?: string;
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
        type,
        name,
        placeholder
    } = props;
    const theme: BaseTheme = useContext(ThemeContext);
    return (
        <>
            <label htmlFor={id}></label>
            <StyledTextInput
                onChange={onChange}
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
            >
            </StyledTextInput>
        </>
    )
};

TextInput.defaultProps = {
    type: 'text',
};

export default TextInput;
