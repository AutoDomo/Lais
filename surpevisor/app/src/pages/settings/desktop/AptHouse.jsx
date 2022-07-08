import { Form, ListWrapper, Label, Input, QrCodeButton } from "../styles";
import Button from "../../../assets/Theme/components/button";

export default function AptHouse() {

    return (
        
        <Form>
            <ListWrapper>
                <Label htmlFor="description">Descrição:</Label>
                <Input type="text" id="description" />
            </ListWrapper>

            <ListWrapper>
                <Label htmlFor="description">Código do servidor:</Label>
                <Input type="text" id="description" />
            </ListWrapper>

            <ListWrapper>
                <Label htmlFor="description">Chave Dispositivo:</Label>
                <Input type="text" id="description" />
            </ListWrapper>

            <ListWrapper>
                <Label htmlFor="description">192.168.10.101</Label>
                <Input type="text" id="description" />
            </ListWrapper>

            <Button redirect={"/"} text="atualizar casa"/>
            <QrCodeButton>
                <i class='bx bx-md bx-qr' ></i>
            </QrCodeButton>
        </Form>
    );
};