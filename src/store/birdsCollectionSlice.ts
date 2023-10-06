import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BirdsCollectionState {
    birdsWishlist: object[];
    birdsSeenlist: object[];
}

const initialState: BirdsCollectionState = {
    birdsWishlist: [],
    birdsSeenlist: []
}

const birdsCollectionSlice = createSlice({
    name: 'birdsCollection',
    initialState,
    reducers: {
        addBirdToWishlist: (state, action: PayloadAction<object>) => {
            state.birdsWishlist.push(action.payload);
        },
        removeBirdFromWishlist: (state, action: PayloadAction<string>) =>{
            state.birdsWishlist = state.birdsWishlist.filter(bird => bird.comName !== action.payload)
        },
        addBirdToSeenlist: (state, action: PayloadAction<object>) => {
            state.birdsSeenlist.push(action.payload);
        },
        removeBirdFromSeenlist: (state, action: PayloadAction<object>) =>{
            state.birdsSeenlist = state.birdsSeenlist.filter(bird => bird.comName !== action.payload)
        }
    }
});

export const {addBirdToWishlist, removeBirdFromWishlist, addBirdToSeenlist, removeBirdFromSeenlist} = birdsCollectionSlice.actions
export default birdsCollectionSlice.reducer