import { FormStyled, Wapper, Input2, Label2 } from "../styles";
import Button from "../../../assets/Theme/components/button";

export default function ChangePassword() {

    return (
        <FormStyled>
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
        </FormStyled>
    );
}