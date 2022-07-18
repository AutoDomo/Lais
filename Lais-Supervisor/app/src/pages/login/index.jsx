import * as styled from "./styles";

import { useDispatch } from "react-redux";
import { loggedAction } from "../../redux/actions/loggedAction";

import axios from "axios";
import { useEffect } from "react";

export default function Login() {

    const dispatch = useDispatch();

    const handleLogin = async () => {
        dispatch(loggedAction(true));
    };

    useEffect(() => {
        console.log('Buscando.....');
        axios.get('http://server:3000/users')
        .then(function (response) {
            // manipula o sucesso da requisição
            console.log(response);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .then(function () {
            // sempre será executado
        });
    }, [])

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