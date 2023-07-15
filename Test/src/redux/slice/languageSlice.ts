import { createSlice } from "@reduxjs/toolkit"

interface vanueType {
    language:string
}

const initialStates: vanueType = {
    language:"Azərbaycan"
}

const languageSlice = createSlice({
    name: "languageSlice",
    initialState: initialStates,
    reducers: {
        changeLanguage:(state,action)=>{
            state.language = action.payload
        },
    }
})

export default languageSlice.reducer

export const { changeLanguage } = languageSlice.actions