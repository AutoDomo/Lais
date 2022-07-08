import styled from "styled-components";
import { BackgroundStyled } from "../../assets/Theme/base/Theme";

export const Container = styled(BackgroundStyled)`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-right: var(--p-sm);

    header {
        flex: 4%;
        display: flex;
        align-items: center;
        padding-left: var(--p-sm);
        background: var(--main-color-opacity);
        border-radius: 0 var(--sm-rounded) var(--sm-rounded) 0;
        width: var(--w-xs);
        opacity: ${props => props.isOpen ? "0" : "0.8"};
        visibility: ${ props => props.isOpen ? "hidden" : "visible"};
        transition: all 0.4s ease;

        @media (min-width: 1024px) {
            display: none;
        };
    };

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const Box = styled.div`
    flex: 90%;
    display: flex;
    flex-direction: column;
    margin-left: var(--m-sm);
    opacity: ${props => props.isOpen ? "0" : "1"};
    visibility: ${ props => props.isOpen ? "hidden" : "visible"};
    transition: all 0.8s ease;
    overflow: hidden;
`;