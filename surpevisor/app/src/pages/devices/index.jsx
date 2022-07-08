import * as styled from "./styles";
import Sidebar from "../../components/sidebar";
import MobileScreen from "./mobile"
import DesktopScreen from "./desktop";

const devicesData = [
    
    {
        description: "Lampada-1",
        enviroment: "Sala",
        type: "Luz (Lâmpada)",
        code: "01:AA:99:99:99:99",
        typeN: "1",
        icon: "bx bx-sun bx-sm",
    },

    {
        description: "Lampada-2",
        enviroment: "Sala",
        type: "Luz (Lâmpada)",
        code: "01:AA:99:99:99:99",
        typeN: "2",
        icon: "bx bx-sun bx-sm"
    },

    {
        description: "Lampada-1",
        enviroment: "Sala",
        type: "Luz (Lâmpada)",
        code: "01:AA:99:99:99:99",
        typeN: "1",
        icon: "bx bx-sun bx-sm"
    },

    {
        description: "Lampada-2",
        enviroment: "Sala",
        type: "Luz (Lâmpada)",
        code: "01:AA:99:99:99:99",
        typeN: "2",
        icon: "bx bx-sun bx-sm"
    },
];

const description = [

    {
        title: "Descrição"
    },

    {
        title: "Ambiente"
    },

    {
        title: "Tipo de dispositivo"
    },

    {
        title: "Tipo"
    },

    {
        title: ""
    },
    {
        title: ""
    },
    {
        title: ""
    },
];

export default function Devices() {

    return (
       
            <styled.Background>

                <Sidebar />
                 <styled.Container>

                    <div className="mobile">

                        <MobileScreen devicesData={devicesData} />

                    </div>

                    <div className="desktop">
                
                        <DesktopScreen
                            devicesData={devicesData}
                            description={description}
                        />

                    </div>
                </styled.Container> 
            </styled.Background>    
    );
};
