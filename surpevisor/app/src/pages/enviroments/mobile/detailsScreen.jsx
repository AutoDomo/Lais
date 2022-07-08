import React, {useState} from "react";
import {
    Background,
    DetailsContainer,
    DetailsForm,
    Input,
    Label,
    ListContainer,
    SecundaryList
} from "../styles";

export default function DetailsScreen() {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Background>
            <DetailsContainer>

                <DetailsForm>
                    <Input type="text" required />
                    <Label>Descrição:</Label>
                </DetailsForm>

                <ListContainer>

                        <div>
                            <span>dispositivos</span>
                            <i class='bx bx-chevron-down bx-sm' onClick={() => setIsOpen(!isOpen)}></i>
                        </div>

                        <SecundaryList isOpen={isOpen}>
                            <li>lampâda rgb</li>
                           
                        </SecundaryList>

                </ListContainer> 
    
            </DetailsContainer>
        </Background>    
    );
}
