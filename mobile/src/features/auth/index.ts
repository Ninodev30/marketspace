import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { setAppIsLoading } from "@features/appLoading";
import createAppAsyncThunk from "@functions/createAppAsyncThunk";
import { SignUpUserTypeProps } from "src/@types/auth/SignUp";
import SignInTypeProps from "src/@types/auth/SignIn";
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
            'user/auth/signIn',
            async (signInData: SignInTypeProps, { getState, dispatch }) => {
                try {
                    dispatch(setAppIsLoading(true));

                    const { data: { user, token } } = await api.post('/sessions', signInData);

                    const { auth } = getState();

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
        signUp: createAppAsyncThunk(
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
            'user/auth/signOut',
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
    storageUserAndTokenSave: createAppAsyncThunk(
        'user/storageUserAndTokenSave',
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
    )
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAndTokenUpdate: (state, action: PayloadAction<AuthState>) => {
            const newToken: string = `Bearer ${action.payload.token}`;
            api.defaults.headers.common.Authorization = newToken;

            state = {
                user: action.payload.user,
                token: state.token
            };
        }
    },
    extraReducers: ({ addCase }) => {
        addCase(auth.login.signIn.fulfilled, (state, { payload }) => {
            state = payload;
        })
        addCase(auth.login.signUp.fulfilled, (state, { payload }) => {
            state = payload;
        })
        addCase(auth.login.signOut.fulfilled, (state, { payload }) => {
            state = payload;
        })
        addCase(auth.storageUserAndTokenSave.fulfilled, state => state)
    }
});

export const { login: { signIn, signUp, signOut } } = auth;
export const { userAndTokenUpdate } = authSlice.actions;

export const authReducer = authSlice.reducer;