import * as styled from "./styles";

import axios from 'axios';

import { useDispatch } from "react-redux";

export default function Login() {

    const dispatch = useDispatch();

    const handleLogin = async () => {
        /* dispatch(loggedAction(true)); */

        const res = await fetch('http://nginx:3000/users');
        const json = await res.json();

        console.log('json: ', json);

        const resTwo = await axios.get('http://nginx:3000/users');

        console.log('resTwo: ', resTwo);
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