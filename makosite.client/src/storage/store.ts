import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './slices/authSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authSliceReducer
    },
});