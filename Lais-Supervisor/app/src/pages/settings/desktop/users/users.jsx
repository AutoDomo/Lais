import React, { useState } from "react";
import Modal from "../../../../components/modal";
import { TransparentList } from "../../../../assets/Theme/components/TransparentList/index";
import { UsersTransparentListItem} from "./styles";

import DetailsUsers from "./detailsUsers";

const users = [

    {
        id: 1,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },

    {
        id: 2,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },

    {
        id: 3,
        icon: "bx bx-sm bx-user",
        description: "eltonss.eng@gmail.com",
    },
];

export default function UsersModal() {
    
    return (
        <TransparentList>
            {users.map(item => <UsersModalControled item={item} />)}
        </TransparentList>
    );
};

function UsersModalControled ({item}) {

    const [showModal, setShowModal] = useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
    }; 

    return (
        <>
            <UsersTransparentListItem>
                <i className={item.icon}></i>
                <span>{item.description}</span>
                <i
                    class='bx bx-md bx-dots-vertical-rounded'
                    onClick={OpenModal}
                ></i>
            </UsersTransparentListItem>

            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                ModalContent={<DetailsUsers />}
            />
        </>
    );
}