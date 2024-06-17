import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    selectedUser: null
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        deleteSelectedUser: state => {
            state.selectedUser = null;
        },
    },
});

export const { setSelectedUser, deleteSelectedUser } = searchSlice.actions;
export default searchSlice.reducer;