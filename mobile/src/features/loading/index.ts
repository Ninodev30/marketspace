import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setIsLoading: (state, isLoading: PayloadAction<boolean>) => {
            state = isLoading.payload;
        }
    }
});

export const { setIsLoading } = isLoadingSlice.actions;

export const isLoadingReducer = isLoadingSlice.reducer;