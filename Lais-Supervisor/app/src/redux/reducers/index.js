import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    deviceReducer,
    userReducer
});

export default rootReducer;