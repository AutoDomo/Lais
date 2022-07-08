import styled from "styled-components";

export const Container = styled.div`
    flex: 70%;
    width: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
    align-content: start;
    gap: 0.75rem;
    padding: 12px;
`;

export const ButtonAdd = styled.button` 
    border-radius: 12px;
    background-color: var(--secundary-color-opacity-2);
    border-color: #fff;
    border-style: dashed;

    @media (min-width: 1024px) {
        display: none;
    };
`;

export const Card = styled.div`
    border-radius: var(--sm-rounded);
    background: ${props => props.isOn ? "#fff" : "var(--secundary-color-opacity)"};
    cursor: pointer;

    .cardFlipped {
        display: ${props => props.flip ? "none" : "block"};
        padding: 12px;
    };

    .on {
        display: ${props => props.isOn ? "block" : "none"};
    };

    .off {
        display: ${props => props.isOn ? "none" : "block"};
    };
`;

export const IconBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    margin-bottom: 16px;
    
    .dot {
        width: 20px;
        height: 20px;
    };  
`;

export const DescriptionBox = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: var(--main-color-opacity);
        margin-bottom: 16px;
        text-align: center;
        font-size: 18px;
    };
`;

export const CodeBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: var(--main-color-opacity);
`;

export const BackCard = styled.div`
    height: 100%;
    width: 100%;
    border-radius: var(--sm-rounded);
    background-color: #01599a;
    display: ${props => props.flip ? "block" : "none"};
    cursor: pointer;
    padding: 12px;

    span {
        color: var(--secundary-color-opacity);
    };

    i {
        color: var(--secundary-color-opacity);
    };
`;

