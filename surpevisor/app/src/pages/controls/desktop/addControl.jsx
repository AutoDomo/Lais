import styled from "styled-components";
import { Form , ListWrapper, Label, Input, ListContainer, SecundaryList} from "../styles";
import Header from "../../../components/Header";
import { useState } from "react";

import Button from "../../../assets/Theme/components/button";

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: var(--secundary-color-opacity);
    padding: 24px;
    overflow: auto;
`;

const Mform = styled(Form)`
    @media(min-width: 1280px) {
        width: 978px;
        margin: 0 auto;
       
    }
`

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

const MlistWrapper = styled(ListWrapper)`
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
    };
`
const MsecundaryList = styled(SecundaryList)`
   display: ${props => props.isOpen ? "block" : "none"};
    list-style: none;

    li {
        padding: var(--p-sm);
        font-size: var(--fs-sm);
    }; 

`

export default function AddControl() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Container>

            

            <Mform>

                <Header title="Adicionar controles" secundaryTheme button="none" />

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
                            <span>Estado</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <MsecundaryList isOpen={isOpen} >
                            <li>Somente ligar</li>
                            <li>Desligar</li>
                            
                        </MsecundaryList>
                    </MlistContainer> 

                   <MlistContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Dispositivo a ser acionado:</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <MsecundaryList isOpen={isOpen}>
                            <li>lampada rgb</li>
                        </MsecundaryList>
                    </MlistContainer>

                    <Button
                        redirect={"/controls"}
                        text="adicionar controle"
                        secundary={"secundary"}
                    />

            </Mform>
        </Container>
    )
}