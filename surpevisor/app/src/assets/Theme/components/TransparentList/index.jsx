import styled from "styled-components";

export const TransparentDescription = styled.div`
    width: 100%;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 20px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--fs-md);
    color: var(--secundary-color-opacity);

    span {
        width: 100%;
    };
`;

export const TransparentList = styled.ul`
    width: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
`;

export const TransparentListItem = styled.li`
    display: flex;
    list-style: none;
    width: 100%;
    margin-top: 12px;
    padding-bottom: 6px;

    span {
        font-size: var(--fs-md);     
        width: 100%;
        color: var(--secundary-color-opacity);
    };

    i {
        color: var(--secundary-color-opacity);
        margin-right: 12px;
    };
`;

export const TransparentIcon = styled.i`
    color: var(--secundary-color-opacity);
    margin-right: 12px;
`;

export const TransparentElement = styled.span`
    font-size: var(--fs-md);     
    width: 100%;
    color: var(--secundary-color-opacity);
`;

