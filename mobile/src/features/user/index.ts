import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "@features/loading";
import { SignUpUserTypeProps } from "src/@types/auth/SignUp";
import SignInTypeProps from "src/@types/auth/SignIn";
import UserDTO from "src/dtos/UserDTO";
import api from "@services/api.";

const initialState: UserDTO = {} as UserDTO;

const auth = {
    signIn: createAsyncThunk(
        'user/signIn',
        async (signInData: SignInTypeProps, { dispatch }) => {
            try {
                dispatch(setIsLoading(true));
                const response = await api.post('/users', signInData);
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
        'user/signUp',
        async (signUpData: SignUpUserTypeProps, { dispatch }) => {
            try {
                dispatch(setIsLoading(true));
                const response = await api.post('/sessions', signUpData);
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
    signOut: createAsyncThunk(
        'user/signOut',
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
    extraReducers: (build) => {
        build
            .addCase(signIn.fulfilled, (state, action) => {
                state = action.payload;
            })
            .addCase(auth.signUp.fulfilled, (state, action) => {
                state = action.payload;
            })
            .addCase(auth.signOut.fulfilled, (state, action) => {
                state = action.payload;
            })
    }
});

export const { signIn, signUp, signOut } = auth;

export const userReducer = userSlice.reducer;