import styled from "styled-components";

export const Container = styled.div`
    flex: 20%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap; 
    overflow-x: auto;
    margin: var(--m-md) 0;
    scroll-behavior: smooth;
    min-height: 120px; 
    max-height: 180px;
    cursor: pointer;

    @media (min-width: 1920px) {
        max-height: 200px;
    };
`;

export const Table = styled.div`
    min-width: 420px;
    font-size: 18px;
    margin-left: var(--m-sm);
    border-radius: var(--md-rounded);
    background: var(--main-color-opacity);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secundary-color-opacity);
    
    :first-child {
        margin-left: 0;
    };
`;

export const ButtonAdd = styled.button`
    min-width: 360px;
    border-radius: 12px;
    background-color: var(--secundary-color-opacity-2);
    border-color: #fff;
    border-style: dashed;

    @media (min-width: 1024px) {
        display: none;
    };
`;