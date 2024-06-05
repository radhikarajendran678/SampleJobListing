import { combineReducers } from "redux";
import  applyJobReducer  from "../redux/applyJobReducer";

export default combineReducers({
    jobs: applyJobReducer
})