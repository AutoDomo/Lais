import React, {useState} from "react";
import Button from "../../../assets/Theme/components/button";

import {
    Background,
    Container,
    Form,
    ListWrapper,
    Label,
    Input,
    ListContainer,
    SecundaryList
} from "../styles";

export default function AddScreen() {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Background>
            <Container>

                <Form>

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
                            <span>Ambiente</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <SecundaryList isOpen={isOpen}>
                            <li>Quarto</li>
                            <li>Sala</li>
                            <li>Cozinha</li>
                        </SecundaryList>
                    </ListContainer>

                    <ListContainer>
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <span>Tipo de Dispositivo</span>
                            <i class='bx bx-chevron-down bx-sm'></i>
                        </div>
                        <SecundaryList isOpen={isOpen}>
                            <li>lampada rgb</li>
                        </SecundaryList>
                    </ListContainer>

                </Form>

                <Button
                    redirect={"/devices"}
                    text="adicionar dispositivo"
                />

            </Container>
        </Background>    
    );
};