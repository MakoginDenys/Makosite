import { createSlice } from '@reduxjs/toolkit';


const initialState: any = {
    accessToken: "",
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
            state.user = null;
            state.accessToken = null;
        },
    },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;