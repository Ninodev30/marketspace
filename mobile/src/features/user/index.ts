import { createSlice } from "@reduxjs/toolkit";
import UserDTO from "src/dtos/UserDTO";

const initialState: UserDTO = {} as UserDTO;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: () => {

        },
        signUp: () => {

        },
        signOut: () => {

        }
    }
});

export const { signIn, signUp, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;