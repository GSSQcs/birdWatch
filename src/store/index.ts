import { configureStore } from "@reduxjs/toolkit";
import birdsCollectionReducer from './birdsCollectionSlice';
import birdSightingsReducer from "./birdSightingsSlice";


const store = configureStore({
    reducer: {
        birdsCollection: birdsCollectionReducer,
        birdSightings: birdSightingsReducer
    },
});

export default store;