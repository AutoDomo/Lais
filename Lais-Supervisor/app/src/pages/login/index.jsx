import * as styled from "./styles";

import { useDispatch } from "react-redux";
import { loggedAction } from "../../redux/actions/loggedAction";

export default function Login() {

    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loggedAction(true));
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