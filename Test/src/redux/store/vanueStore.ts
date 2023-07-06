import {configureStore, } from "@reduxjs/toolkit";
import vanueSlice from "../slice/vanueSlice";

export const store = configureStore({
    reducer:{
        vanueData:vanueSlice,
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>