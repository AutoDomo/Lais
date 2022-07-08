import styled from "styled-components";
import { BackgroundStyled } from "../../../../assets/Theme/base/Theme";
import Header from "../../../../components/Header/index";
import { useNavigate } from "react-router-dom";

import {
    TransparentList,
    TransparentListItem,
    TransparentElement,
    TransparentIcon
} from "../../../../assets/Theme/components/TransparentList/index";


const users = [

    {
        id: 1,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },

    {
        id: 2,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },

    {
        id: 3,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },
];

const Background = styled(BackgroundStyled)``;

const Container = styled.div`
    background-color: var(--main-color-opacity);
    width: 100%;
    height: 100vh;
    padding: var(--p-md);
    overflow: auto;
`;

const UsersTransparentListItem = styled(TransparentListItem)`
    justify-content: space-between;

    span {
        width: auto;
    }
`;

export default function MobileUsersScreen() {

    let navigate = useNavigate();

    return (
        <Background>
            <Container>
                <Header title="Usuários" icon="none" />

                <TransparentList>
                    {users.map(item => (
                        <UsersTransparentListItem>
                            <TransparentIcon className={item.icon} />
                            <TransparentElement>{item.description}</TransparentElement>
                            <TransparentIcon className={'bx bx-md bx-dots-vertical-rounded'}
                                onClick={() => navigate("/settings/users/details")} />
                        </UsersTransparentListItem>
                    ))}
                </TransparentList>
                
            </Container>
        </Background>
    )
}