import { combineReducers } from "redux";
import { getDataReducer } from "./reducer";

export default combineReducers ({
    listdata : getDataReducer
})