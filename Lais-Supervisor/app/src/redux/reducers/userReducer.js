import { SET_TRUE_LOGGED } from "../types";

const initialState = {
    user: "",
    pwd: "",
    logged: false
};

const userReducer = (state = initialState, action) => {

    if(action.type === SET_TRUE_LOGGED) {
        return {...state, logged: action.payload};
    };

    return state;
};

export default userReducer;