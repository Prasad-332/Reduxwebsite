
import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { favreducer } from './favreducer';


export const mainreducer = combineReducers({
    reducer:reducer,
    favreducer:favreducer
})
