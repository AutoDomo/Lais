import styled from "styled-components";
import { BackgroundStyled, ContainerStyled } from "../../assets/Theme/base/Theme";
import { ModalInput, ModalLabel, ModalWrapper } from "../../assets/Theme/base/Form";

import { BarStyled } from "../../assets/Theme/base/Typography";

export const Background = styled(BackgroundStyled)`
    
`;

export const Container = styled(ContainerStyled)`
    padding: var(--p-md);
    overflow: auto;

    @media(min-width: 1280px) {
        display: flex;
        justify-content: center;

        .desktop {
            width: 1136px;
            
        }
    }
    
`;

export const Bar = styled(BarStyled)`
    width: 100%;
    margin-bottom: var(--m-xg);
`;

export const List = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    gap: var(--p-xs);
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    padding: var(--p-sm);
    border-radius: var(--sm-rounded);
    background: var(--secundary-color-opacity);
    color: var(--main-color-opacity);

    div {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

        :first-child {
            justify-content: start;
        }

        i {
            margin-right: var(--m-sm);
        }
    }

    span {
        display: none;
        align-items: center;
        width: 100%;
        justify-content: center;

        @media (min-width: 1024px) {
            display: flex;
        }

        :first-child {
            justify-content: start;
        }

        i {
            margin-right: var(--m-sm);
        }
    }

    .bxs-trash {
        display: none;

        @media (min-width: 1024px) {
            display: flex;
        }
    };

    .bx-chevron-right {
        @media (min-width: 1024px) {
            display: none;  
        }
    }
`;

export const DescriptionItem = styled.li`
    height: 3rem;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: var(--p-md);
    border-radius: var(--sm-rounded);
    background: var(--secundary-color-opacity);
    color: var(--main-color-opacity);
    margin-bottom: var(--m-bg);

    @media (min-width: 1024px) {
        display: flex;
    }

    i {
        visibility:hidden;
    }

    span {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;

        :first-child {
            justify-content: start;
        }

        i {
            visibility: hidden;
        }
    }
`;


/* - - - Details - - - */

export const Form = styled.form``;

export const Label = styled(ModalLabel)``;

export const Input = styled(ModalInput)``;

export const ListWrapper = styled(ModalWrapper)`

    :first-child {
        margin-bottom: var(--m-md);
    };

    .inputNumber {
        width: 0.75rem;
        justify-self: end;
        margin-left: auto;
    };
`;

export const ListContainer = styled.div`
    margin-bottom: var(--m-xg);
    color: var(--secundary-color-opacity);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var(--fs-md);
    };

`;

export const SecundaryList = styled.ul`
    display: ${props => props.isOpen ? "block" : "none"};
    list-style: none;

    li {
        padding: var(--p-sm);
        font-size: var(--fs-sm);
    };
`;     

export const Trash = styled.div`
    width: 50px;
    margin: 0 auto;
    color: var(--secundary-color-opacity);
`;

/* - - - add - - - - */

export const AddContainer = styled(ContainerStyled)`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.pressed ? "none" : "space-between"};
`;

export const AddForm = styled.form`
    display: ${props => props.pressed ? "block" : "none"};
`;
         
export const PressButton = styled.button`
     width: 100%;
    height: var(--h-xs);
    border-radius: var(--sm-rounded);
    border: none;
    outline: none;
    background-color: var(--secundary-color-opacity);
    color: var(--main-color-opacity);
    font-size: var(--fs-sm);
    text-transform: uppercase;

    display: ${props => props.disable ? "none" : "flex"};
    align-items: center;
    justify-content: center;


    span {
        margin-right: var(--m-sm);
    };
`;




   


