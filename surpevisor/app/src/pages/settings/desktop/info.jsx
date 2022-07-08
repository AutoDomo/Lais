import { List, ListItem, QrCode } from "../styles";
import Img from "../../../assets/images/qrcode.png";

const Info = [

    {
        name: "Nome:",
        description: "Bancada 2020_01"
    },

    {
        name: "Usuário:",
        description: "autodomo"
    },

    {
        name: "E-mail Kappelt:",
        description: "eltonss.eng@gmail.com"
    },

    {
        name: "Senha Kappelt:",
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
        name: "Chave local:",
        description: "83438"
    },

    {
        name: "Versão Firmware:",
        description: "3.0"
    }

];

import styled from "styled-components";

const List2 = styled.ul`
    //background-color: red;
    width: 100%;
    //height: 100%;
   // border: 1px solid var(--secundary-color-opacity);
    //outline: none;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    
    border-radius: 12px;

    padding: 20px 120px;
`;

const ListItem2 = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    //background-color: #fff;
    width: 100%;
   // border-bottom: 1px solid #fff;
    margin-top: 12px;
    padding-bottom: 6px;
    //margin-bottom: 6px;

    span {
        font-size: var(--fs-md);
       // color: var(--secundary-color-opacity);
     //  color: #01599a;
    // color: var(--secundary-color-opacity);
    color: #fff;

       opacity: 0.8;
       width: 100%;
    }

    i {
        //color: var(--main-color-opacity);
        color: var(--secundary-color-opacity);
    }
`;


export default function InfoModal() {
    
    return (   
        <> 
        <List2>
            {Info.map(item => (
                <ListItem2>
                    <span>{item.name}</span>
                    <span>{item.description}</span>
                    <i class='bx bx-sm bx-copy-alt'></i>                
                </ListItem2>

            ))} 
            
        </List2>

        <QrCode>
            <img src={Img} alt="" />
        </QrCode>
    </>
    );
};