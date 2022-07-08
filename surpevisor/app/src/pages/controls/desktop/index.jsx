import Header from "../../../components/Header";
import AddControl from "./addControl";
import {
    TransparentList,
    TransparentListItem,
    TransparentDescription
} from "../../../assets/Theme/components/TransparentList/index";

export default function DesktopScreen({controlsData, description}) {
    
    return (
        <>
            <Header
                title="Controles"
                label="Adicionar controle"
                modalContent={<AddControl />}
            />

             <TransparentDescription>
                {description.map( item => (
                    <span>{item.title}</span>
                ))}
            </TransparentDescription> 

            <TransparentList>
                {controlsData.map( item => (
                    <TransparentListItem>
                        <i class={item.icon}></i>
                        <span>{item.description}</span>
                        <span>{item.enviroment}</span>
                        <span>{item.type}</span>
                        <span>{item.code}</span>
                        <i class='bx bx-sm bx-trash'></i>
                    </TransparentListItem>
                ))}
            </TransparentList> 
        </>
    );
}