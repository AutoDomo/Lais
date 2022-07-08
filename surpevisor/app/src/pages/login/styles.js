import styled from "styled-components";
import { BarStyled } from "../../assets/Theme/base/Typography";
import { BackgroundStyled, ContainerStyled } from "../../assets/Theme/base/Theme";
import { DefaultForm } from "../../assets/Theme/components/form/form";
import { DefaultInput } from "../../assets/Theme/components/form/input";
import { DefaultLabel } from "../../assets/Theme/components/form/label";
import { DefaultButton } from "../../assets/Theme/components/form/button";
import { DefaultTitle } from "../../assets/Theme/components/typography/title";

export const Background = styled(BackgroundStyled)`
    padding: 0;
`;

export const Container = styled(ContainerStyled)`
    display: flex;
    justify-content: center;
    border-radius: 0;
`;

export const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    width: 80%;
    height: 100%;

    @media (min-width: 768px) {
        width: 60%;
    };

    @media (min-width: 1240px) {
        width: 50%;
    };

    @media (min-width: 1920px) {
        width: 40%;
    } ;

`;

export const Box = styled.div`
    width: 100%;
    margin-bottom: var(--m-xg);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled(DefaultTitle)``;

export const Bar = styled(BarStyled)`
    width: 10%;
`;

export const Form = styled(DefaultForm)`
    .wrapper {
        margin-bottom: var(--m-bg);
    };
`;

export const Input = styled(DefaultInput)``;

export const Label = styled(DefaultLabel)``;

export const Button = styled(DefaultButton)``;
