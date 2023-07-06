import {createSlice } from "@reduxjs/toolkit"

interface vanueType {
    data: any,
    favorites:any,
    error:any
}

const initialStates : vanueType = {
    data:[],
    favorites:[],
    error:null
}

const vanueSlice = createSlice({
  name:"vanueSlice",
  initialState:initialStates,
  reducers:{
    addToFavorite:(state,action)=>{
        if(state.favorites.find((c:any)=>c.id==action.payload.id)){
            state.favorites = state.favorites.filter((c: any) => c.id != action.payload.id)
        }
        else{
            state.favorites.push(action.payload)
        }
    }
  }
})

export default vanueSlice.reducer

export const {addToFavorite} = vanueSlice.actions