import styled from "styled-components";
import { BackgroundStyled, ContainerStyled } from "../../../assets/Theme/base/Theme";
import {
    TransparentList,
    TransparentListItem,
    TransparentElement,
    TransparentIcon
} from "../../../assets/Theme/components/TransparentList/index";

import Header from "../../../components/Header";

const Background = styled(BackgroundStyled)``;

const Container = styled(ContainerStyled)`
    padding: var(--p-md);
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

const Info = [

    {
        name: "Nome",
        description: "Bancada 2020_01"
    },

    {
        name: "Usuário",
        description: "autodomo"
    },

    {
        name: "E-mail Kappelt",
        description: "eltonss.eng@gmail.com"
    },

    {
        name: "Senha Kappelt",
        description: "comida$05$"
    },

    {
        name: "Usuário MQTT:",
        description: "autohome"
    },

    {
        name: "Senha MQTT:",
        description: "comida05"
    },

    {
        name: "Número Serial:",
        description: "c4ca4238a0b92384"
    },

    {
        name: "Chave dos dispositivos:",
        description: "ABCDEF254552"
    },

    {
        name: "IP:",
        description: "192.168.10.101"
    },

    {
        name: "Chave local",
        description: "83438"
    },

    {
        name: "Versão Firmware",
        description: "3.0"
    }

];

export default function MobileInfoScreen() {

    return(
        <Background>
            <Container>
                
                 <Header
                    title="Informações do sistema"
                    icon="none"
                /> 

                <TransparentList>
                    {Info.map(item => (
                        <TransparentListItem>
                            <TransparentElement>{item.name}</TransparentElement>
                            <TransparentElement>{item.description}</TransparentElement> 
                            <TransparentIcon className="bx bx-sm bx-copy" />                     
                        </TransparentListItem>
                    ))}
                </TransparentList> 
             
            </Container>
        </Background>
    )
}