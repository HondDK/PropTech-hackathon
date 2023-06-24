import { combineReducers } from "redux";
import loginPageReducer from "./LoginPageSlice";

const rootReducer = combineReducers({
    loginPage: loginPageReducer,

});

export default rootReducer;