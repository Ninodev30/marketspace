import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "@store/index";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
}>();

export default createAppAsyncThunk;