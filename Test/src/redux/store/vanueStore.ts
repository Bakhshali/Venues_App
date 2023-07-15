import {configureStore, } from "@reduxjs/toolkit";
import languageSlice from "../slice/languageSlice";
import vanueSlice from "../slice/vanueSlice";

export const store = configureStore({
    reducer:{
        vanueData:vanueSlice,
        languageData:languageSlice
    }
})
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>