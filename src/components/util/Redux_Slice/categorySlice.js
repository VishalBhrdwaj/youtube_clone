import { createSlice } from "@reduxjs/toolkit";


const categorySlice=createSlice({
    name:"category",
    initialState:{
        content:"Loading"
    },
    reducers:{
        updatedCategory:(state,action)=>{
            state.content=action.payload;
            // console.log(state.content);
        }
    }
})

export const {updatedCategory}=categorySlice.actions;

export default categorySlice.reducer;