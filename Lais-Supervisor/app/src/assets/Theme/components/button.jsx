import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ButtonStyled = styled.button` 
    width: 100%;
    height: var(--h-xs);
    border-radius: var(--sm-rounded);
    border: none;
    outline: none;
    background-color: ${props => props.secundary ? "var(--main-color-opacity)" : "var(--secundary-color-opacity)"};
    color: ${props => props.secundary ? "var(--secundary-color-opacity)" : "var(--main-color-opacity)"};
    font-size: var(--fs-md);
    text-transform: uppercase;
    transition: all 0.2s ease;
`;

export default function Button({text, pressed, redirect, secundary}) {

    let navigate = useNavigate();

    function handleRedirect() {
        return navigate(`${redirect}`)
    }

    return (
        <ButtonStyled onClick={handleRedirect} pressed={pressed} secundary={secundary}>{text}</ButtonStyled>
    );
};