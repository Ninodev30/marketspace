import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { SignUpUserTypeProps } from "src/@types/auth/SignUp";
import SignInTypeProps from "src/@types/auth/SignIn";
import UserDTO from "src/dtos/UserDTO";
import api from "@services/api.";

const initialState: UserDTO = {} as UserDTO;

const auth = {
    signIn: createAsyncThunk(
        'user/signIn',
        async (signInData: SignInTypeProps) => {
            try {
                const response = await api.post('/sessions', signInData);
                const user: UserDTO = response.data.user;

                console.log(user)
                return user;
            }
            catch (error) {
                throw error;
            }
        }
    ),
    signUp: createAsyncThunk(
        'user/signUp',
        async (signUpData: SignUpUserTypeProps, { dispatch, getState }) => {
            try {
                const avatarForm = new FormData();
                avatarForm.append('avatar', signUpData.avatar);

                const signUpFormData = {
                    ...signUpData,
                    avatar: signUpData.avatar
                };
                console.log(signUpData)

                const testing = await api.post('/users', signUpFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log(testing)

                const signInData: SignInTypeProps = {
                    email: signUpData.email,
                    password: signUpData.password
                };

                await dispatch(signIn(signInData));

                const { user } = getState() as RootState;

                return user;
            }
            catch (error) {
                throw error;
            }
        }
    ),
    signOut: createAsyncThunk(
        'user/signOut',
        () => {
            const user = {} as UserDTO;
            return user;
        }
    )
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(auth.signIn.fulfilled, (state, action) => {
            return action.payload;
        })
        addCase(auth.signUp.fulfilled, (state, action) => {
            return action.payload;
        })
        addCase(auth.signOut.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const { signIn, signUp, signOut } = auth;

export const userReducer = userSlice.reducer;