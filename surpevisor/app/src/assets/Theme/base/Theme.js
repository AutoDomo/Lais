import styled from "styled-components";
import BackgroundTheme from "../../images/background.jpg";

export const BackgroundStyled = styled.section`
    background-image: url(${BackgroundTheme});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat, repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    
    @media (min-width: 1024px) {
        padding: var(--p-sm);
    }
`;

export const ContainerStyled = styled.div`
    background-color: var(--main-color-opacity);
    width: 100%;
    height: 100%;
    overflow: auto;


    @media (min-width: 1024px) {
        border-radius: var(--sm-rounded);
    };

`;