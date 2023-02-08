import { configureStore } from "@reduxjs/toolkit";
import { appIsLoadingReducer } from "@features/appLoading";
import { counterReducer } from "@features/counter";
import { filterReducer } from "@features/filter";
import { userReducer } from "@features/user";

const store = configureStore({
    reducer: {
        appIsLoading: appIsLoadingReducer,
        counter: counterReducer,
        filter: filterReducer,
        user: userReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;