import styled from "styled-components";

export const DefaultInput = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--secundary-color-opacity);
    background: transparent;
    font-size: var(--fs-md);
    padding: var(--p-sm) 0;
    color: var(--secundary-color-opacity);

    :focus ~ label, :valid ~ label {
            transform: translateY(-1rem);
            font-size: var(--fs-sm);
    };
`;
