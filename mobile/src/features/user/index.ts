import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { SignUpUserTypeProps } from "src/@types/auth/SignUp";
import SignInTypeProps from "src/@types/auth/SignIn";
import UserDTO from "src/dtos/UserDTO";
import api from "@services/api.";
import storage from "@storage/index";

const initialState: UserDTO = {} as UserDTO;

type LoginAuthProps = {
    user: UserDTO;
    token: string;
};

const auth = {
    signIn: createAsyncThunk(
        'user/auth/signIn',
        async (signInData: SignInTypeProps) => {
            try {
                const { data: { user, token } } = await api.post('/sessions', signInData);

                console.log(user)
                return user;
            }
            catch (error) {
                throw error;
            }
        }
    ),
    signUp: createAsyncThunk(
        'user/auth/signUp',
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
        'user/auth/signOut',
        async () => {
            try {
                const user = {} as UserDTO;
                await storage.user.delete();
                await storage.token.delete();

                return user;
            }
            catch (error) {
                throw error;
            }
        }
    )
};

const storageUserAndTokenSave = createAsyncThunk(
    'user/storageUserAndTokenSave',
    async ({ user, token }: LoginAuthProps) => {
        try {
            await storage.user.save(user);
            await storage.token.save(token);
        }
        catch (error) {
            throw error;
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAndTokenUpdate: (state, action: PayloadAction<LoginAuthProps>) => {
            const newToken: string = `Bearer ${action.payload.token}`;
            api.defaults.headers.common.Authorization = newToken;

            state = action.payload.user;
        }
    },
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
        addCase(storageUserAndTokenSave.fulfilled, (state) => {
            return state
        })
    }
});

export const { signIn, signUp, signOut } = auth;
export const { userAndTokenUpdate } = userSlice.actions;

export const userReducer = userSlice.reducer;