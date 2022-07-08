import styled from "styled-components";
import { Background, Container } from "../../styles";

import {
    TransparentList,
    TransparentListItem,
    TransparentElement,
} from "../../../../assets/Theme/components/TransparentList/index";

const DetailsTransparentListItem = styled(TransparentListItem)`
    justify-content: space-between;

    span {
        width: auto;
    }
`;

const PermissionContainer = styled.div`
    width: 100%;
    //background-color: red;

    div {
        display: flex;
        justify-content: space-between;
        margin-top: var(--m-md);

        span {
            font-size: var(--fs-md);
            color: var(--secundary-color-opacity);
        }
    };

    input {
        position: relative;
        width: 100px;
        height: 32px;
        appearance: none;
        background-color: var(--secundary-color-opacity);
        border-radius: 50px;
        box-shadow: inset 0px 0px 16px 1px rgba(0, 0, 0, 0.24);
        cursor: pointer;
        transition: 0.4s;
    };

    input:checked[type="checkbox"] {
       
    };

    input[type="checkbox"]:before {
        content: "";
        width: 32px;
        height: 32px;
        background-color: var(--main-color-opacity);
        border-radius: 50px;
        position: absolute;
        box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.25);
        transform: scale(1.1);
        top: 0;
        left: 0;
        transition: 0.4s;
    };

    input:checked[type="checkbox"]:before {
        left: 69px;
    };
`;

const data = [

    {
        name: "Imei:",
        description: "8693880438021550"
    },

    {
        name: "Token:",
        description: "csgQS"
    },

    {
        name: "Primeiro acesso:",
        description: "09/09/2019, 20:16:10"
    },

    {
        name: "Último acesso:",
        description: "10/09/2019, 14:29:50"

    }
];  

export default function DetailsUsers() {

    return (
        <Background>
            <Container>
        
                <TransparentList>
                    {data.map( item => (
                        <DetailsTransparentListItem>
                            <TransparentElement>{item.name}</TransparentElement>
                            <TransparentElement>{item.description}</TransparentElement>
                        </DetailsTransparentListItem>
                    ))}
                </TransparentList>
                    
                <PermissionContainer>
                    <div>
                        <span>Habilitado</span>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <span>Usuário pleno</span>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <span>Administrador</span>
                        <input type="checkbox" />
                    </div>
                </PermissionContainer>

            </Container>
        </Background>
    );
}