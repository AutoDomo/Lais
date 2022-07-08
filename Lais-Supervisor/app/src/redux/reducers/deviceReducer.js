import { GET_DEVICE_PER_ENVIROMENT } from "../types";
import { dataMap } from "../../../dataProcess";

const initialState = {
    dataMap,
    selectedEnviroment: "0"
};

const deviceReducer = (state = initialState, action) => {

    if(action.type === GET_DEVICE_PER_ENVIROMENT) {
        return {...state, selectedEnviroment: action.payload };
    };

    return state;
};

export default deviceReducer;