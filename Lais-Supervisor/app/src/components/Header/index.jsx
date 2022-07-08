import React, {useState} from "react";
import styled from "styled-components";
import { BarStyled }from "../../assets/Theme/base/Typography";
import Modal from "../modal/index";


 const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--m-sm);

      h2 {
        font-weight: ${ props => props.fontWeight || "700" };
        color: ${props => props.secundaryTheme ? "var(--main-color-opacity)" : "var(--secundary-color-opacity)"  };
        font-size: ${props => props.fontSize || "var(--fs-bg)"};
    };
 `;
 
const Icon = styled.span`
    display: ${props => props.icon ? "none" : "block"};

    @media (min-width: 1024px) {
        display: none;
    };
`;

const Bar = styled(BarStyled)`
    width: 100%;
    margin-bottom: var(--m-xg);
    display: ${props => props.bar ? "none" : "block"};
    background-color: ${props => props.secundaryTheme ? "var(--main-color-opacity)" : "var(--secundary-color-opacity)"  };


`;

const HeaderBtn = styled.button`
    width: 240px;
    border-radius: var(--sm-rounded);
    border: none;
    outline: none;
    background-color: var(--secundary-color-opacity);
    color: var(--main-color-opacity);
    font-size: var(--fs-sm);
    transition: all 0.2s ease;
    display: none;

    @media (min-width: 1024px) {
        display: ${props => props.button ? "none" : "block"};
    }
`;

import { useNavigate } from "react-router-dom";

export default function Header({
    title,
    icon,
    label,
    button,
    onClick,
    bar,
    modalContent,
    napgate,
    secundaryTheme,
    fontWeight,
    fontColor,
    fontSize
}) {

    const [showModal, setShowModal] = useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
    };

    console.log(fontColor);

    let navigate = useNavigate();

    return (
        <>
            <section>
                <Box secundaryTheme={secundaryTheme} fontColor={fontColor} fontWeight={fontWeight} fontSize={fontSize}>
                    <h2>{title}</h2>
                
                        <Icon
                            icon={icon}
                            onClick={onClick}
                        >
                            <i class='bx bx-plus bx-sm icon-reset' onClick={() => {
                                navigate(`${napgate}`)
                            }}></i>
                        </Icon>
                
                        <HeaderBtn
                            button={button}
                            onClick={OpenModal}
                        >
                            {label}
                        </HeaderBtn>
                   
                </Box>

                <Bar bar={bar} secundaryTheme={secundaryTheme}/>
            </section>

            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
                ModalContent={modalContent}
            />
        </>
    );
};