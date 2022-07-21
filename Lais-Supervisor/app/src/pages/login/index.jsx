import * as styled from "./styles";

import axios from 'axios';

import { useDispatch } from "react-redux";

export default function Login() {

    const dispatch = useDispatch();

    const instanceSignIn = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    });

    const handleLogin = async () => {
        /* dispatch(loggedAction(true)); */

        const users = await instanceSignIn.put('/users', {
            name: 'lais',
            password: 'comida05'
        });

        console.log('users: ', users);
    };

    return (
        <styled.Background>
            <styled.Container>

                <styled.ResponsiveContainer>
                    
                    <styled.Box>
                        <styled.Title>Login</styled.Title>
                        <styled.Bar />
                    </styled.Box>

                    <styled.Form>
                        <div className="wrapper">
                            <styled.Input id="user" type="text" required />
                            <styled.Label htmlFor="user">Usuário:</styled.Label>
                        </div>
                        <div className="wrapper">
                            <styled.Input id="pwd" type="password" required/>
                            <styled.Label htmlFor="pwd">Senha:</styled.Label>
                        </div>
                    </styled.Form>
                    <styled.Button onClick={handleLogin}>LOGIN</styled.Button>

                </styled.ResponsiveContainer>
            </styled.Container>
        </styled.Background>
    );
};