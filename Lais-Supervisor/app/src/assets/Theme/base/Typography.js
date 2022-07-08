import styled from "styled-components";

export const TitleStyled = styled.h3`
    font-size: ${props => props.medium ? "var(--fs-md)" : "var(--fs-bg)"};
    font-weight: ${props => props.medium ? "var(--f-medium)" : "var(--f-semi-bold"};
    color: var(--secundary-color-opacity);
`;

export const BarStyled = styled.hr`
    width: 100%;
    margin: 0 auto;
    height: 1px;
    border: none;
    background-color: var(--secundary-color-opacity);
`;