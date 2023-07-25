import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";
import cacheSlice from "./cacheSlice";
import categorySlice from "./Redux_Slice/categorySlice";


const store=configureStore({
    reducer:{
        app:appslice,
        cache:cacheSlice,
        category:categorySlice
    }
})

export default store