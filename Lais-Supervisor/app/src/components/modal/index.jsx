import React, {useRef} from "react";
import styled from "styled-components";

const Background = styled.section`
    width: 100%;
    height: 100%;
    background: var(--main-color-opacity);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    width: 80%;
    height: 70%;
    border-radius: var(--sm-rounded);
    background-color: var(--secundary-color-opacity);
    z-index: 10;
    overflow-y: scroll;
   
    i {
        cursor: pointer;
    };
`;

export default function Modal({showModal, setShowModal, ModalContent}) {

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        };
    };

    return (
        <>
            {showModal ?
                (<Background
                    ref={modalRef}
                    onClick={closeModal}
                >
                    <ModalCard >
                        {ModalContent}
                    </ModalCard>
                </Background>)
            : null}
        </>
    );
};
