import styled from "styled-components";
import { BackgroundStyled, ContainerStyled } from "../../assets/Theme/base/Theme";
import { BarStyled } from "../../assets/Theme/base/Typography";
import { ModalInput, ModalLabel, ModalWrapper } from "../../assets/Theme/base/Form";


export const Background = styled(BackgroundStyled)``;

export const Container = styled(ContainerStyled)`
    padding: var(--p-md);

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

/* - - - - add - - - -*/

export const Form = styled.form``;

export const Label = styled(ModalLabel)``;

export const Input = styled(ModalInput)``;

export const ListWrapper = styled(ModalWrapper)`

    :first-child {
        margin-bottom: var(--m-md);
    }

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
    }
`;            
   

/* - - --  details - - - */


export const Trash = styled.div`
    width: 50px;
    margin: 0 auto;
    color: var(--secundary-color-opacity);
`;
   


