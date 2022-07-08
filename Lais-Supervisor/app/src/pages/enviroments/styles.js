import styled from "styled-components";
import { BackgroundStyled, ContainerStyled } from "../../assets/Theme/base/Theme";

import { DefaultInput } from "../../assets/Theme/components/form/input";
import { DefaultLabel } from "../../assets/Theme/components/form/label";
import { DefaultForm } from "../../assets/Theme/components/form/form";


export const Background = styled(BackgroundStyled)``;

export const Container = styled(ContainerStyled)`
    padding: var(--p-md);
    position: relative;

    @media(min-width: 1280px) {
        display: flex;
        justify-content: center;

        .desktop {
            width: 1136px;
        }
    }
`;


/* - - - add - - -- */


export const AddContainer = styled(Container)`
    padding: var(--p-bg);
`;

 export const Form = styled(DefaultForm)`
    margin-bottom: var(--m-xg);
`;

export const Input = styled(DefaultInput)``;

export const Label = styled(DefaultLabel)``;



/* - -  Details - -- */

export const DetailsContainer = styled(Container)`
    padding: var(--p-md);
    padding-top: var(--p-bg);
`;

export const DetailsForm = styled(DefaultForm)`
    margin-bottom: var(--m-bg);
`;

export const ListContainer = styled.div`

    margin-bottom: var(--m-xg);
    
    div {
        display: flex;
        justify-content: space-between;
        color: var(--secundary-color-opacity);
        font-size: var(--fs-md);
    };
`;

export const SecundaryList = styled.ul`
    display: ${props => props.isOpen ? "block" : "none"};
    list-style: none;

    color: var(--secundary-color-opacity);
        font-size: var(--fs-sm);

    li {
        padding: var(--p-xs);
    };
`;



