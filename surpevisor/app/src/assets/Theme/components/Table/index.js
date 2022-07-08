import styled from "styled-components";

export const TransparentTable = styled.table`
    width: 100%;
    padding: 14px 24px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 20px;

    tr {
        td {
            padding: 8px;
            font-size: var(--fs-md);
            color: var(--secundary-color-opacity);
            width: 20%; 
        };

        .text-align-end {
            text-align: end;

            i {
                margin-left: var(--m-sm);
            };
        };
    };
`;