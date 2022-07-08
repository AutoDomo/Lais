import * as styled from "./styles";

import Sidebar from "../../components/sidebar";
import MobileScreen from "./mobile";
import DesktopScreen from "./desktop";

const controlsData = [

  {
    description: "Interruptor",
    enviroment: "Sala",
    type: "Luz(Lâmpada)",
    code: "01:AA:99:99:99:99",
    icon: "bx bx-sm bx-toggle-right"
  },

  {
    description: "Portão",
    enviroment: "Sala",
    type: "Luz(Lâmpada)",
    code: "01:AA:99:99:99:99",
    icon: "bx bx-sm bxs-car-garage"
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
    title: "Código"
  },
];


export default function Controls() {
  return (

    <styled.Background>

        <Sidebar />
          <styled.Container>

            <div className="mobile">
                
              <MobileScreen controlsData={controlsData} />

            </div>

            <div className="desktop">
              
              <DesktopScreen
                controlsData={controlsData}
                description={description}
              />

            </div>

        </styled.Container> 
    </styled.Background>

  );
};