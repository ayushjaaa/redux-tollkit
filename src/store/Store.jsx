import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/Usereducer'

import ProductReducer from "./reducers/ProductReducer"
export const store = configureStore({
    reducer:{
    userReducer:userReducer,
ProductReducer:ProductReducer
    }
})