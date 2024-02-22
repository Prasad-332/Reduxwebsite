import { createStore } from "redux";
import { mainreducer } from "./mainreducer";


export const store = createStore(mainreducer)