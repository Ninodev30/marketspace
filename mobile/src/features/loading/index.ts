import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IsLoadingState = {
    value: boolean;
};

const initialState: IsLoadingState = {
    value: false
};

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setIsLoading: (state, isLoading: PayloadAction<boolean>) => {
            state.value = isLoading.payload;
        }
    }
});

export const { setIsLoading } = isLoadingSlice.actions;

export const isLoadingReducer = isLoadingSlice.reducer;