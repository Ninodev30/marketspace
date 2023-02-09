import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAppIsLoading } from "@features/appLoading";
import { SignUpUserTypeProps } from "src/@types/auth/SignUp";
import SignInTypeProps from "src/@types/auth/SignIn";
import createAppAsyncThunk from "@functions/createAppAsyncThunk";
import UserDTO from "src/dtos/UserDTO";
import api from "@services/api.";
import storage from "@storage/index";

type AuthState = {
    user: UserDTO;
    token: string;
}

const initialState: AuthState = {} as AuthState;

const auth = {
    login: {
        signIn: createAppAsyncThunk(
            'auth/login/signIn',
            async (signInData: SignInTypeProps, { dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const { data: { user, token } } = await api.post('/sessions', signInData);

                    if (user && token) {
                        await dispatch(userAndTokenData.save({ user, token }));
                        dispatch(updateAuthState({ user, token }));
                    };

                    return { user, token };
                }
                catch (error) {
                    throw error;
                }
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        ),
        signUp: createAppAsyncThunk(
            'auth/login/signUp',
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
                        }
                    });

                    console.log(response)

                    const signInData: SignInTypeProps = {
                        email,
                        password
                    };

                    await dispatch(signIn(signInData));

                    const { auth } = getState()

                    return auth;
                }
                catch (error) {
                    throw error;
                }
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        ),
        signOut: createAppAsyncThunk(
            'auth/login/signOut',
            async (_, { dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const user = {} as UserDTO;
                    const token: string = '';

                    await storage.user.delete();
                    await storage.token.delete();

                    return { user, token };
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
    userAndTokenData: {
        load: createAppAsyncThunk(
            'auth/userAndTokenData/load',
            async (_, { dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const user: UserDTO = await storage.user.get();
                    const token: string = await storage.token.get();

                    if (user && token)
                        dispatch(updateAuthState({ user, token }));
                }
                catch (error) {
                    throw error;
                }
                finally {
                    dispatch(setAppIsLoading(false));
                }
            }
        ),
        save: createAppAsyncThunk(
            'auth/userAndTokenData/save',
            async ({ user, token }: AuthState, { dispatch }) => {
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
        ),
    }
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateAuthState: (state, action: PayloadAction<AuthState>) => {
            const newToken: string = `Bearer ${action.payload.token}`;
            api.defaults.headers.common.Authorization = newToken;

            state = {
                user: action.payload.user,
                token: state.token
            };
        },
        refreshToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        subscribe: (state, action) => {
            api.registerInterceptTokenManager({
                signOut: signOut,
                resfreshTokenUpdated: refreshToken
            })
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(auth.login.signIn.fulfilled, (_, { payload }) => {
            return payload
        })
        addCase(auth.login.signUp.fulfilled, (_, { payload }) => {
            return payload;
        })
        addCase(auth.login.signOut.fulfilled, (_, { payload }) => {
            return payload;
        })
        addCase(auth.userAndTokenData.load.fulfilled, state => state)
        addCase(auth.userAndTokenData.save.fulfilled, state => state)
    }
});

export const { login: { signIn, signUp, signOut }, userAndTokenData } = auth;
export const { updateAuthState, refreshToken, subscribe } = authSlice.actions;

export const authReducer = authSlice.reducer;