import { configureStore } from "@reduxjs/toolkit";
import birdsCollectionReducer from './birdsCollectionSlice';


const store = configureStore({
    reducer: {
        birdsCollection: birdsCollectionReducer,
    },
});

export default store;