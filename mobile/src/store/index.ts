import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "@features/counter";
import { filterReducer } from "@features/filter";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        filter: filterReducer
    }
});

type GetStateType = typeof store.getState;

export type RootState = ReturnType<GetStateType>;

export default store;