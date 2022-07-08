import * as styled from "./styles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDevicePerEnviroment } from "../../../../redux/actions/getDevicePerEnviroment";



export default function Environments() {

    let navigate = useNavigate();
    const enviroments = useSelector(state => state.deviceReducer.dataMap);
    const dispatch = useDispatch();
    
    return (
        
        <styled.Container>
            <styled.ButtonAdd
                onClick={() => navigate("/enviroments/add")}
            >
                <i className='bx bx-plus bx-sm icon-reset'/>
            </styled.ButtonAdd>

             {enviroments.map(item => (
                <styled.Table key={item.deviceCode} onClick={() => dispatch(getDevicePerEnviroment(item.enviromentId))}>
                    <span>{item.enviroment}</span>
                </styled.Table>
            ))} 
            
        </styled.Container>
    );
};