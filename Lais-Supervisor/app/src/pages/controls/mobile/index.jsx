import Header from "../../../components/Header";
import {
    TransparentList,
    TransparentListItem
} from "../../../assets/Theme/components/TransparentList/index";
import { useNavigate } from "react-router-dom";

export default function MobileScreen({controlsData}) {
    
    let navigate = useNavigate();

    return (
        <>
            <Header title="Controles" napgate={"/controls/add"}/>

            <TransparentList>
                {controlsData.map( item => (
                    <TransparentListItem>
                        <i className={item.icon}></i>
                        <span>{item.description}</span>
                        <i
                            className='bx bx-sm bx-chevron-right'
                            onClick={() => navigate("/controls/details")}
                        ></i>
                    </TransparentListItem>
                ))}
            </TransparentList>
        </>
    );
};