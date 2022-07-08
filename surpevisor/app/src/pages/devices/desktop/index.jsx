
import Header from "../../../components/Header";
import AddDevices from "./addDevices";
import { useSelector } from "react-redux";
import { TransparentTable } from "../../../assets/Theme/components/Table/index";

export default function DesktopScreen({description}) {

    const devicesInfo = useSelector(state => state.deviceReducer.dataMap);

    return (
        <>
            <Header
                title={"Dispositivos"} 
                label={"Adicionar dispositivo"}
                modalContent={<AddDevices />}
            />

            <TransparentTable>
                <tr>
                    {description.map( item => (
                        <td>{item.title}</td>                        
                    ))}
                </tr>
            </TransparentTable>

            <TransparentTable>
                {devicesInfo.map( item => (
                    <tr>
                        <td>{item.description}</td>
                        <td>{item.enviroment}</td>
                        <td>{item.deviceCode}</td>
                        <td>{item.deviceType}</td>
                        <td>{item.typeN}</td>
                        <td>
                            <i className="bx bx-sm bx-trash"/>
                        </td>
                      </tr>
                ))}
            </TransparentTable>
        </>
    );
}