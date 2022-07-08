import styled from "styled-components";
import { BackgroundStyled, ContainerStyled } from "../../assets/Theme/base/Theme";
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


    .desktop {

        display: none;


        @media (min-width: 1024px) {
            display: block;
           /* display: flex;
           justify-content: center;
           flex-direction: column;
            overflow-y: scroll; */

        }
    }

    .mobile {
        display: block;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .barContainer {
        position:relative;
    }

    nav {
        //background-color: red;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

    label {
        //display: block;
        //height: 100%;
        width: 198px;
        //width: 100%;
        //background-color: blue;
        text-align: center;
       // line-height: 50px;
        cursor: pointer;
        color: var(--secundary-color-opacity);
        font-size:var(--fs-md);
        font-weight: var(--f-medium);
    }

    
    }

    .slider {
        position: absolute;
        height: 1px;
       // width: 210px;
       width: 20%;
        background-color: var(--main-color);
        bottom: 0;
        left: 0;
        transition: all 0.3s ease;
    };

    input[type="radio"] {
        display: none;
    }

    #users:checked ~ div .slider {
        left: 20%;
    };

    #add:checked ~ div .slider {
        left: 40%;
    };

    #apt:checked ~ div .slider {
        left: 60%;
    };
    
    #pwd:checked ~ div .slider {
        left: 80%;
    };

    section .content {
        display: none;
    }

    #info:checked ~ section .content-1 {
        display: block;
    };

    #users:checked ~ section .content-2 {
        display: block;
    };

    #add:checked ~ section .content-3 {
        display: block;
    };

    #apt:checked ~ section .content-4 {
        display: block;
    };

    #pwd:checked ~ section .content-5 {
        display: block;
    };

`;



export const Header = styled.header`
    margin-bottom: 30px;
    justify-content: start;
    color: var(--secundary-color-opacity);
    font-size:var(--fs-bg);
    font-weight: var(--f-semi-bold);     
`;

export const Bar = styled(BarStyled)`
    width: 100%;
    margin-bottom: var(--m-xg);
    z-index: 0;
`;

export const NavMenu = styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    label {
        width: 198px;
        text-align: center;
        cursor: pointer;
        color: var(--secundary-color-opacity);
        font-size:var(--fs-md);
        font-weight: var(--f-medium);
    }

    
`;


/* - - -- - - - - */

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

/* - - - - - - - - - desktop - - - - - - - --  - */

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

export const QrCode = styled.div`
    width: 140px;
    height: 140px;
    padding: var(--p-sm);
    border-radius: var(--sm-rounded);
    background-color: var(--secundary-color);
    margin: var(--m-bg) auto;
    
    img {
        width: 100%;
    };
`;

/* -- - -add house - - -*/

import { ModalInput, ModalLabel, ModalWrapper } from "../../assets/Theme/base/Form";

export const Form = styled.form`
    width: 60%;
    
    margin: 200px auto;
   // background-color: red;
`;

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

/* input elements */

export const Label = styled(ModalLabel)``;

export const Input = styled(ModalInput)``;

export const QrCodeButton = styled.button`
    display: block;
    width: 60px;
    height: 60px;
    color: var(--main-color-opacity);
    background-color: var(--secundary-color-opacity);
    border: none;
    outline: none;
    border-radius: var(--sm-rounded);
    margin: var(--m-md) auto;
`;

/* - - - - - - pwd - - - - - -*/

export const FormStyled = styled.form`
    position: relative;
    width: 60%;
    margin: 200px auto;

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

export const Wapper = styled.div`
    margin-bottom: var(--m-bg);
`;

export const Label2 = styled.label`
    position: absolute;
    left: 0;
    color: var(--secundary-color-opacity);
    pointer-events: none;
    font-size: var(--fs-md);
    transition: all 0.4s ease;
`;

export const Input2 = styled.input`
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




export const Nav = styled.nav`
    width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        label {
        //display: block;
        //height: 100%;
        width: 198px;
        //width: 100%;
        //background-color: blue;
        text-align: center;
       // line-height: 50px;
        cursor: pointer;
        
        

        a {
            text-decoration: none;
            color: var(--secundary-color-opacity);
            font-size:var(--fs-md);
            font-weight: var(--f-medium);
        }
    }

`