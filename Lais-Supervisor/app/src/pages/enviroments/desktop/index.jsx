import React, {useState} from "react";
import { useSelector } from "react-redux";
import Header from "../../../components/Header";
import Modal from "../../../components/modal";

import Devices from "../../dashboard/components/devices";
import AddEnviroments from "./addEnviroments";
import { TransparentTable } from "../../../assets/Theme/components/Table/index" ;

export default function EnviromentsScreen() {

    const devicesInfo = useSelector(state => state.deviceReducer.dataMap);

    return (

        <>
            <Header
                title="Ambientes"
                label="Adicionar ambientes"
                modalContent={<AddEnviroments />}
            />

            <TransparentTable>
                <tr>
                    <td>Descrição</td>
                </tr>
            </TransparentTable>

            <TransparentTable>
                {devicesInfo.map(
                    item => <EnviromentsScreenControled item={item} />
                )}
            </TransparentTable>
       </>
    );
};

function EnviromentsScreenControled({item}) {

    const [showModal, setShowModal] = useState(false);

    const OpenModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <tr>
                <td>{item.enviroment}</td>

                <td className="text-align-end">
                    <i
                        className={'bx bx-sm bx-dots-vertical-rounded'}
                        onClick={OpenModal}
                    />    
                    <i className="bx bx-sm bxs-trash" />    
                </td>
            </tr>

            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                ModalContent={<Devices />}     
            /> 
        </>
    );
};