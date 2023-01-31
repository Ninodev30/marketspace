import { setIsLoading } from "@features/loading";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@services/api.";
import SignInTypeProps from "src/@types/auth/SignIn";
import UserDTO from "src/dtos/UserDTO";

const initialState: UserDTO = {} as UserDTO;

const auth = {
    signIn: createAsyncThunk(
        'user/signIn',
        async (signInData: SignInTypeProps, { dispatch }) => {
            try {
                dispatch(setIsLoading(true));
                const response = await api.post('/sessions', signInData);
                const user: UserDTO = response.data.user;

                return user;
            }
            catch (error) {
                throw error;
            }
            finally {
                dispatch(setIsLoading(false));
            }
        }
    ),
    signUp: createAsyncThunk(
        'user/signIn',
        async (signInData: SignInTypeProps, { dispatch }) => {
            try {
                dispatch(setIsLoading(true));
                const response = await api.post('/sessions', signInData);
                const user = response.data.user;

                return user;
            }
            catch (error) {
                throw error;
            }
            finally {
                dispatch(setIsLoading(false));
            }
        }
    ),
    signOut: createAsyncThunk(
        'user/signIn',
        async (_, { dispatch }) => {
            try {
                dispatch(setIsLoading(true));
                const user: UserDTO = {} as UserDTO;

                return user;
            }
            catch (error) {
                throw error;
            }
            finally {
                dispatch(setIsLoading(false));
            }
        }
    )
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(auth.signIn.fulfilled, (state, action) => {
            state = action.payload;
        })
        addCase(auth.signUp.fulfilled, (state, action) => {
            state = action.payload;
        })
        addCase(auth.signOut.fulfilled, (state, action) => {
            state = action.payload;
        })
    }
});

export const { signIn, signUp, signOut } = auth;

export const userReducer = userSlice.reducer;