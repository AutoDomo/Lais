import React, {useState} from "react";
import {
    Background,
    Container,
    PressButton,
    Form,
    ListWrapper,
    Label,
    Input,
    ListContainer,
    SecundaryList
} from "../styles";

import Button from "../../../assets/Theme/components/button";

export default function AddScreen() {

    const [isOpen, setIsOpen] = useState(false);
    const [pressed, setPressed] = useState(false);
    const [disable, setDisable] = useState(false);

    const handlePressed = e => {
        setPressed(!pressed);
        setDisable(!disable);
    };
    
    return (
        <Background>
            <Container pressed={pressed}>

                <PressButton onClick={handlePressed} disable={disable} >
                    <span>Pressione o botão do controle</span>
                    <i class='bx bx-wifi bx-sm' ></i>
                </PressButton>

                <Form pressed={pressed}>

                    <ListWrapper>
                        <Label htmlFor="code">Código:</Label>
                        <Input type="number" id="code" />
                        <Input className="inputNumber" type="number" />
                    </ListWrapper>

                    <ListWrapper>
                        <Label htmlFor="description">Descrição:</Label>
                        <Input type="text" id="description" />
                    </ListWrapper>

                    <ListContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Estado</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <SecundaryList isOpen={isOpen}>
                            <li>Somente ligar</li>
                            <li>Desligar</li>
                            
                        </SecundaryList>
                    </ListContainer>

                    <ListContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Dispositivo a ser acionado:</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <SecundaryList isOpen={isOpen}>
                            <li>lampada rgb</li>
                        </SecundaryList>
                    </ListContainer>

                </Form>

                <Button
                    redirect={"/controls"}
                    text="adicionar controle"
                    pressed={pressed}
                />

            </Container>
        </Background>    
    );
};