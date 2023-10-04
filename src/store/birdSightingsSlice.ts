import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BirdSightingsState {
    birdSightings: object;
}

const initialState: BirdSightingsState = {
    birdSightings: {}
}

const birdSightingsSlice = createSlice({
    name: 'birdSightings',
    initialState,
    reducers: {
        setBirdSightings: (state, action: PayloadAction<object[]>) => {
            state.birdSightings = action.payload;
        }
    }
});

export const {setBirdSightings} = birdSightingsSlice.actions
export default birdSightingsSlice.reducer