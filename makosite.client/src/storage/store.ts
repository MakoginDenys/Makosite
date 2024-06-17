import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './slices/authSlice.ts';
import searchSliceReducer from './slices/searchSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        search: searchSliceReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch