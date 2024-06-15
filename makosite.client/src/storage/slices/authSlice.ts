import {createSlice} from '@reduxjs/toolkit';
import {IAuthState} from "../../models/interfaces/IAuthState.ts";

const initialState: IAuthState = {
    accessToken: null,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.accessToken = action.payload.token;
            state.user = action.payload.user;
        },
        logoutUser: state => {
            state.accessToken = null;
            state.user = null;
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;