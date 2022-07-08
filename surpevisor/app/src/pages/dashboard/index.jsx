import * as styled from "./styles";
import { useState } from "react";

import Environments from "./components/environments";
import Devices from "./components/devices";
import Sidebar from "../../components/sidebar";

export default function Dashboard() {

    const [isOpen, setIsOpen] = useState(false);
    
    const onClose = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        
        <styled.Container isOpen={isOpen}>
             <header onClick={onClose}>
                <i className='bx bx-menu bx-sm icon-reset'></i>
            </header>

           <Sidebar isOpen={isOpen} onClose={onClose} />
            
            <styled.Box  isOpen={isOpen}>
                <Environments />
                <Devices /> 
            </styled.Box>
            
        </styled.Container>
    );
};
