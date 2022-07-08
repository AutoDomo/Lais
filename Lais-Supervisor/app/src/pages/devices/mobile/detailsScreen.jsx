import React, {useState} from "react";
import {
    Background,
    Container,
    Form,
    ListWrapper,
    Label,
    Input,
    ListContainer,
    SecundaryList,
    Trash
} from "../styles";


export default function DetailsScreen() {
    
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

                <Trash><i class='bx bx-trash-alt bx-sm' ></i></Trash>
            </Container>
        </Background>    
    );
}