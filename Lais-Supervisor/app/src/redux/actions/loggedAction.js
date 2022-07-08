import { SET_TRUE_LOGGED } from "../types";


export const loggedAction = (props) => {
    return {
        type: SET_TRUE_LOGGED,
        payload: props
    };
};