import styled from "styled-components";

export const FormStyle = styled.form`
    position: relative;
    width: 100%;

    .last-child {
       margin-bottom: var(--m-md);
   };
`;

export const LabelStyled = styled.label`
    position: absolute;
    left: 0;
    color: var(--secundary-color-opacity);
    pointer-events: none;
    font-size: var(--fs-md);
    transition: all 0.4s ease;
`;

export const InputStyled = styled.input`
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


/* Modal standard style */

export const ModalLabel = styled.label`
    color: var(--secundary-color-opacity);
    pointer-events: none;
    font-size: var(--fs-md);
    margin-right: var(--m-md);
`;

export const ModalInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: var(--fs-md);
    color: var(--secundary-color-opacity);
`;

export const ModalWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid var(--secundary-color-opacity);
    padding-bottom: var(--p-md);
    margin-bottom: var(--m-xg);
`;

/* list stand styled */

export const ListStyled = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    gap: var(--p-xs);
`;

export const ListItemStyled = styled.li`
    display: flex;
    padding: var(--p-sm);
    border-radius: var(--sm-rounded);
    background: var(--secundary-color-opacity);
    color: var(--main-color-opacity);

    @media (max-width: 1024px) {
        justify-content: space-between;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 1024px) {
            width: 100%;
        }
    };

    span i {
        margin-right: var(--m-sm);
    }
`;





