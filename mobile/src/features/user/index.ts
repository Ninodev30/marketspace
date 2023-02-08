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
        async (data: SignUpUserTypeProps, { dispatch, getState }) => {
            try {
                const { avatar, name, email, phone, password } = data;

                console.log(data)

                const formData = new FormData();
                formData.append('avatar', avatar)
                formData.append('name', name);
                formData.append('email', email);
                formData.append('tel', phone);
                formData.append('password', password);

                console.log(formData);

                const response = await api.post('/users', formData, {
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    transformRequest: (data, headers) => {
                        return data
                    }
                });

                console.log(response)

                const signInData: SignInTypeProps = {
                    email,
                    password
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