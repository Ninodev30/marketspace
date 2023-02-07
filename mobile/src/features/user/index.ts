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

                console.log(avatar)
                console.log(name, email, phone, password)

                const form = new FormData();
                form.append('avatar', avatar)
                form.append('name', name);
                form.append('email', email);
                form.append('tel', phone);
                form.append('password', password);

                console.log(form);

                // await api.post('/users', form, {
                //     headers: {
                //         'Content-Type': 'multipart/form-data'
                //     },
                // });

                fetch('http://10.1.1.110:3333/users',
                    {
                        method: 'POST',
                        body: form,
                    })
                    .then(response => {
                        console.log(JSON.stringify(response))
                    })
                    .catch(error => {
                        console.error(error);
                    })

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