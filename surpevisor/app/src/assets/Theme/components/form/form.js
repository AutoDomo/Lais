import styled from "styled-components";

export const DefaultForm = styled.form`
    position: relative;
    width: 100%;

    .last-child {
        margin-bottom: var(--m-md);
    };

    span {
        display: block;
        font-size: var(--fs-sm);
        color: var(--secundary-color-opacity);
        margin-bottom: var(--m-bg);
    };
`;