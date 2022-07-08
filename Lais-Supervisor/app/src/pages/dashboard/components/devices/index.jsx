import * as styled from "./styles";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";;
import { useSelector } from "react-redux";

export default function Devices() {

    const [isOn, setIsOn] = useState(false);
    const [flip, setFlip] = useState(false);

    const devicesInfo = useSelector(state => state.deviceReducer.dataMap);

    const selectedEnviroment = useSelector(state => state.deviceReducer.selectedEnviroment);

    const selectedDevices = devicesInfo.filter(device => {

        if(selectedEnviroment == 0) {
            return true;
        };
        return device.enviromentId == selectedEnviroment
    });

    let navigate = useNavigate();

    return (
        <styled.Container>
            <styled.ButtonAdd
                onClick={() => navigate("/devices/add")}
            >
                <i className='bx bx-plus bx-sm icon-reset'/>
            </styled.ButtonAdd>

            {selectedDevices.map(item => (

                <styled.Card
                    key={item.deviceCode}
                    isOn={isOn}
                    flip={flip}
                    onClick={() => setIsOn(!isOn)} 
                >
                
                    <div className="cardFlipped">

                        <styled.IconBox>
                            <img alt="light" className="on"  src="src/assets/images/light-bulb (2).png"/>
                            <img src="src/assets/images/offblue.png" alt="" className="off"/>
                            <img src="src/assets/images/more.png" alt=""  className="dot" onClick={() => setFlip(!flip)}/>
                        </styled.IconBox>

                        <styled.DescriptionBox>
                            <span>{item.description}</span>
                            <span>{item.enviroment}</span>
                        </styled.DescriptionBox>

                        <styled.CodeBox>
                            <span>{item.deviceCode}</span>
                        </styled.CodeBox>

                    </div>

                    <styled.BackCard flip={flip}>

                        <styled.IconBox>
                            <img src="src/assets/images/close.png" alt="close" onClick={() => setFlip(!flip)}/>
                            
                        </styled.IconBox>

                        <styled.DescriptionBox>
                            <span>{item.deviceType}</span>
                        </styled.DescriptionBox>

                        <i class='bx bx-sm bxs-trash'/>
                    </styled.BackCard>

                </styled.Card>
            ))};

        </styled.Container>
    );
};