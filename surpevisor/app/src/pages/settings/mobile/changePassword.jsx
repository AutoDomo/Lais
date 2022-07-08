import styled from "styled-components";
import { FormStyled, Wapper, Input2, Label2 } from "../styles";
import { BackgroundStyled } from "../../../assets/Theme/base/Theme";

import Header from "../../../components/Header";
import Button from "../../../assets/Theme/components/button";


const Background = styled(BackgroundStyled)``;

const Container = styled.div`
    background-color: var(--main-color-opacity);
    width: 100%;
    height: 100vh;
    padding: var(--p-md); 
    overflow: auto;

`;

 const ChangePwdForm = styled(FormStyled)`
    width: 100%;
    margin: 0;
    padding:  0 var(--p-sm);
`;

export default function MobileChangePassword() {

    return (
        <Background>
            <Container>

                <Header
                    title="Mudar senha de acesso"
                    icon="none"
                />
                
                <ChangePwdForm>
                    <Wapper>
                        <Input2 id="user" type="text" required />
                        <Label2 htmlFor="user">Usuário:</Label2>
                    </Wapper>

                    <Wapper>
                        <Input2 id="pwd" type="text" required />
                        <Label2 htmlFor="pwd">Nova senha:</Label2>
                    </Wapper>

                    <Wapper className="last-child">
                        <Input2 id="pwd" type="text" required />
                        <Label2 htmlFor="pwd">Confirmar Senha:</Label2>
                    </Wapper>

                    <Button redirect={"/"} text={"MUDAR SENHA"}></Button>
                </ChangePwdForm>

            </Container>
        </Background>
    )
}