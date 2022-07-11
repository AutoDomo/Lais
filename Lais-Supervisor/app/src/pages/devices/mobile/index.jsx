import Header from "../../../components/Header";
import {
    TransparentList,
    TransparentListItem,
    TransparentElement,
    TransparentIcon
} from "../../../assets/Theme/components/TransparentList/index";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MobileScreen({devicesData}) {

    let navigate = useNavigate();

    const devicesInfo = useSelector(state => state.deviceReducer.dataMap);

    return (
        <>
            <Header title={"Dispositivos"} napgate={"/devices/add"} />
           
             <TransparentList>
                {devicesInfo.map( item => (
                    <TransparentListItem>
                        <TransparentIcon className={item.icon}/>
                        <TransparentElement>{item.description}</TransparentElement>
                        <TransparentIcon
                            className={"bx bx-sm bx-chevron-right"}
                            onClick={() => {
                            navigate("/devices/details")}}
                        />
                    </TransparentListItem>
                ))}
            </TransparentList> 
        </>
    );
};