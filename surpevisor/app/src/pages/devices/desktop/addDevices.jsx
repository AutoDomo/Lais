

import styled from "styled-components";
import { Form , Label, Input, ListContainer, SecundaryList} from "../styles";
import { useState } from "react";

import Button from "../../../assets/Theme/components/button";
import Header from "../../../components/Header";

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: var(--secundary-color-opacity);
    padding: 24px;
    overflow: auto;
`;

const Mform = styled(Form)`
    width: 100%;
    height: 100%;

    @media(min-width: 1280px) {
        width: 978px;
        margin: 0 auto;
       
    }
`;

const Mlabel = styled(Label)`
    color: var(--main-color-opacity);
    pointer-events: none;
    font-size: var(--fs-md);
    margin-right: var(--m-md);
`;

const Minput = styled(Input)`
     border: none;
    outline: none;
    background: transparent;
    font-size: var(--fs-md);
    color: var(--main-color-opacity);
`;

const MlistWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid var(--main-color-opacity);
    padding-bottom: var(--p-md);
    margin-bottom: var(--m-xg);
`;

const MlistContainer = styled(ListContainer)`
    margin-bottom: var(--m-xg);
    color: var(--main-color-opacity);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var(--fs-md);
        
        span {
            color: var(--main-color-opacity);
        };

        i {
            color: var(--main-color-opacity);

        }

        li {
            color: var(--main-color-opacity);

        }
    };
`
const MsecundaryList = styled(SecundaryList)`
   display: ${props => props.isOpen ? "block" : "none"};
    list-style: none;

    li {
        padding: var(--p-sm);
        font-size: var(--fs-sm);
        color: var(--main-color-opacity);

    }; 

`

export default function AddDevices() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Container>

            <Mform>
                <Header title="Adicionar dispositivo" secundaryTheme button="none" />

                <div>
                <MlistWrapper>
                    <Mlabel htmlFor="code">Código:</Mlabel>
                    <Minput type="number" id="code" />
                    <Minput className="inputNumber" type="number" />
                </MlistWrapper>

                <MlistWrapper>
                        <Mlabel htmlFor="description">Descrição:</Mlabel>
                        <Minput type="text" id="description" />
                    </MlistWrapper>

                    <MlistContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Ambiente</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <MsecundaryList isOpen={isOpen} >
                            <li>Quarto</li>
                            <li>Sala</li>
                            
                        </MsecundaryList>
                    </MlistContainer> 

                   <MlistContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Tipo de dispositivo:</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <MsecundaryList isOpen={isOpen}>
                            <li>lampada rgb</li>
                        </MsecundaryList>
                    </MlistContainer>

                    <Button
                        redirect={"/devices"}
                        text="adicionar dispositivo"
                        secundary={"secundary"}
                    />
                </div>

            </Mform>
        </Container>
    )
}