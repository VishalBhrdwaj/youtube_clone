import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";
import cacheSlice from "./cacheSlice";


const store=configureStore({
    reducer:{
        app:appslice,
        cache:cacheSlice
    }
})

export default store