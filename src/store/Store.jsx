import { configureStore } from "@reduxjs/toolkit";

import Usereducer from "./reducers/Usereducer";
import ProductReducer from "./reducers/ProductReducer"
export const store = configureStore({
    reducer:{
    Usereducer:Usereducer,
ProductReducer:ProductReducer
    }
})