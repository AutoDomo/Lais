import * as styled from "./styles";
import Sidebar from "../../components/sidebar/index";
import MobileScreen from "./mobile/index";
import EnviromentsScreen from "./desktop/index";
import AddScreen from "./mobile/addScreen";
import DetailsScreen from "./mobile/detailsScreen";

const enviromentsData = [
    
    {
        id: 1,
        description: "Quarto",
        type: "Dispositivos cadastrados",
        icon: "bx bx-bed bx-sm",
        list: [

            {
                item: "lampada-1-1"
            },

            {
                item: "lampada-2-1"
            },

            {
                item: "lampada-3-1"
            },

            {
                item: "lampada-3-1"
            },

        ]
    },

    {
        id: 2,
        description: "Cozinha",
        type: "Dispositivos cadastrados",
        icon: "bx bx-color bx-sm",
        list: [

            {
                item: "lampada-1-2"
            },

            {
                item: "lampada-2-2"
            },

            {
                item: "lampada-3-2"
            },

            {
                item: "lampada-3-2"
            },

        ]
    },

    {
        id: 3,
        description: "Quintal",
        type: "Dispositivos cadastrados",
        icon: "bx bxs-hard-hat bx-sm",
        list: [

            {
                item: "lampada-1-3"
            },

            {
                item: "lampada-2-3"
            },

            {
                item: "lampada-3-3"
            },

            {
                item: "lampada-3-3"
            },

        ]
    },
    
];

const Description = [
    
    {
        title: "Descrição",
        key: 1
    },
];



export default function Enviroments() {
    
    return (
         <styled.Background>
            <Sidebar/>
               <styled.Container>

                <div className="mobile">
                    <MobileScreen enviromentsData={enviromentsData} />
                </div>

                <div className="desktop">

                    <EnviromentsScreen
                        enviromentsData={enviromentsData}
                        Description={Description}
                    />

                </div>
                
            </styled.Container> 
        </styled.Background>  
);
};