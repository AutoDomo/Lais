import styled from "styled-components";
import { BackgroundStyled } from "../../../assets/Theme/base/Theme";

import Header from "../../../components/Header/index";
import Button from "../../../assets/Theme/components/button";

import { Form, ListWrapper, Label, Input, QrCodeButton } from "../styles";

const Background = styled(BackgroundStyled)``;

const Container = styled.div`
    background-color: var(--main-color-opacity);
    width: 100%;
    padding: var(--p-md);
    overflow: auto;


`

const AddForm = styled(Form)`
    width: 100%;
    margin: 0;
    padding:  0 var(--p-sm);
`

export default function MobileAptHouseScreen() {

    return (
        <Background>
            <Container>
                <Header title="Atualizar casa" icon="none" />

                <AddForm>

                    <ListWrapper>
                        <Label htmlFor="description">Descrição:</Label>
                        <Input type="text" id="description" />
                    </ListWrapper>

                    <ListWrapper>
                        <Label htmlFor="description">Código do servidor:</Label>
                        <Input type="text" id="description" />
                    </ListWrapper>

                    <ListWrapper>
                        <Label htmlFor="description">Chave Dispositivo:</Label>
                        <Input type="text" id="description" />
                    </ListWrapper>

                    <ListWrapper>
                        <Label htmlFor="description">192.168.10.101</Label>
                        <Input type="text" id="description" />
                    </ListWrapper>

                </AddForm>

                <Button  redirect={"/"} text="atualizar casa" />

                <QrCodeButton>
                    <i class='bx bx-md bx-qr' ></i>
                </QrCodeButton>

            </Container>
        </Background>
    );
}