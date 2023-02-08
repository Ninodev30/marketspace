import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppIsLoadingState = {
    value: boolean;
};

const initialState: AppIsLoadingState = {
    value: false
};

export const AppIsLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setAppIsLoading: (state, isLoading: PayloadAction<boolean>) => {
            state.value = isLoading.payload;
        }
    }
});

export const { setAppIsLoading } = AppIsLoadingSlice.actions;

export const appIsLoadingReducer = AppIsLoadingSlice.reducer;