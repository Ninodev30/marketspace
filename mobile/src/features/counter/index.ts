import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    value: number;
};

const initialState: CounterState = {
    value: 3
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { increment, incrementAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;