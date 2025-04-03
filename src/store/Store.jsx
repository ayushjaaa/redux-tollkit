import { configureStore } from "@reduxjs/toolkit";
import Usereducer from "./reducers/Usereducer";
export const store = configureStore({
    reducer:{
    Usereducer:Usereducer
    }
})