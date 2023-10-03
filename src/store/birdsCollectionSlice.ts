import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BirdsCollectionState {
    birdsCollection: object[];
}

const initialState: BirdsCollectionState = {
    birdsCollection: []
}

const birdsCollectionSlice = createSlice({
    name: 'birdsCollection',
    initialState,
    reducers: {
        addBirdToCollection: (state, action: PayloadAction<object>) => {
            state.birdsCollection.push(action.payload);
        },
        removeBirdFromCollection: (state, action: PayloadAction<object>) =>{
            state.birdsCollection = state.birdsCollection.filter(bird => bird.name !== action.payload)
        }
    }
});

export const {addBirdToCollection, removeBirdFromCollection} = birdsCollectionSlice.actions
export default birdsCollectionSlice.reducer