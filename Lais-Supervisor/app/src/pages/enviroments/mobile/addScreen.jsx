import {
    Background,
    AddContainer,
    Form,
    Input,
    Label
} from "../styles";
import Button from "../../../assets/Theme/components/button";

export default function AddScreen() {

    return (
        <Background>
            <AddContainer>

                <Form>
                    <Input id="description" type="text" required />
                    <Label htmlFor="description">Descrição:</Label>
                </Form>

                <Button
                    redirect={"/enviroments"}
                    text="adicionar ambiente"
                />
                
            </AddContainer>
        </Background>    
    );
};