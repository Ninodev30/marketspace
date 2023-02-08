import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { setAppIsLoading } from "@features/appLoading";
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
    login: {
        signIn: createAsyncThunk(
            'user/auth/signIn',
            async (signInData: SignInTypeProps, { dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const { data: { user, token } } = await api.post('/sessions', signInData);

                    console.log(user)
                    return user;
                }
                catch (error) {
                    throw error;
                }
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        ),
        signUp: createAsyncThunk(
            'user/auth/signUp',
            async (data: SignUpUserTypeProps, { dispatch, getState }) => {
                try {
                    dispatch(setAppIsLoading(true));

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
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        ),
        signOut: createAsyncThunk(
            'user/auth/signOut',
            async (_, { dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const user = {} as UserDTO;
                    await storage.user.delete();
                    await storage.token.delete();

                    return user;
                }
                catch (error) {
                    throw error;
                }
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        )
    },
    storageUserAndTokenSave: createAsyncThunk(
        'user/storageUserAndTokenSave',
        async ({ user, token }: LoginAuthProps, { dispatch }) => {
            try {
                dispatch(setAppIsLoading(true));

                await storage.user.save(user);
                await storage.token.save(token);
            }
            catch (error) {
                throw error;
            }
            finally {
                dispatch(setAppIsLoading(false));
            }
        }
    )
};

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
        addCase(auth.login.signIn.fulfilled, (state, action) => {
            return action.payload;
        })
        addCase(auth.login.signUp.fulfilled, (state, action) => {
            return action.payload;
        })
        addCase(auth.login.signOut.fulfilled, (state, action) => {
            return action.payload;
        })
        addCase(auth.storageUserAndTokenSave.fulfilled, (state) => {
            return state
        })
    }
});

export const { login: { signIn, signUp, signOut } } = auth;
export const { userAndTokenUpdate } = userSlice.actions;

export const userReducer = userSlice.reducer;