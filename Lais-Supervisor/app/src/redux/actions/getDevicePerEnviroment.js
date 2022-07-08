import { GET_DEVICE_PER_ENVIROMENT } from "../types";

export const getDevicePerEnviroment = (props) => {
    return {
        type: GET_DEVICE_PER_ENVIROMENT,
        payload: props

    };
};