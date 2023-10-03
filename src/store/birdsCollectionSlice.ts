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
        }
    }
});

export default birdsCollectionSlice.reducer